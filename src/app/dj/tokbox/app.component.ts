import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OpentokService } from '../../services/opentok.service';
import * as OT from '@opentok/client';
import { Observable } from 'rxjs'
import * as io from 'socket.io-client'
import config from '../../config.js'

@Component({
  selector: 'dj-tokbox',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpentokService]
})
export class AppComponent implements OnInit {
  title = null;
  session: any;
  sessionId: any;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;

  // private socket = io(`http://localhost:3000`)
  private socket = io();

  constructor(private ref: ChangeDetectorRef,
    private opentokService: OpentokService, ) {
    this.changeDetectorRef = ref;
  }

  ngOnInit() {
    this.socket.on('tokSession', (sessionId, token) => {

      this.sessionId = sessionId;
      this.fireSession(this.sessionId, token)
    })
  }

  fireSession(sessionId, token) {

    const { API_KEY } = config;

    this.opentokService.initSession(API_KEY, sessionId, token)
      .then((sessionId: any) => {

        this.session = sessionId;

        this.session.on('streamCreated', (event) => {
          this.streams.push(event.stream);
          this.changeDetectorRef.detectChanges();
        });
        this.session.on('streamDestroyed', (event) => {
          const idx = this.streams.indexOf(event.stream);
          if (idx > -1) {
            this.streams.splice(idx, 1);
            this.changeDetectorRef.detectChanges();
          }
        });
      })
      .then(() => this.opentokService.connect())
      .catch((err) => {
        console.error(err);
        alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
      });

  }
}
