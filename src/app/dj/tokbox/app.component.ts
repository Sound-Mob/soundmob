import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OpentokService } from './opentok.service';
import * as OT from '@opentok/client';
import { Observable } from 'rxjs'
import * as io from 'socket.io-client'
import config from '../../config.js'

@Component({
  selector: 'dj-tokbox',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ OpentokService ]
})
export class AppComponent implements OnInit {
  title = 'Angular Basic Video Chat';
  session: any;
  sessionId: any;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;

  private socket = io('ws://localhost:3000', { transports: ['websocket'] })

  constructor(private ref: ChangeDetectorRef,
    private opentokService: OpentokService,) {
    this.changeDetectorRef = ref;
  }

  ngOnInit () {
    this.socket.on('tokSession', (sessionId, token)=>{
      console.log("tok heard", sessionId);
      this.sessionId = sessionId;
      this.fireSession(this.sessionId, token)
    })
  }
  
  fireSession(sessionId, token){
    console.log(config, " in fire")
    console.log(sessionId, " in fire")
    const { API_KEY } = config;
    console.log(token, " TOKEN in fire session")
    this.opentokService.initSession(API_KEY ,sessionId, token)
      .then((sessionId: any) => {
        console.log(" in fire session callback")
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
