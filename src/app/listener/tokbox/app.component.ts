import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import * as OT from '@opentok/client';
import { OpentokService } from '../../services/opentok.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-tokbox',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ OpentokService ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular Basic Video Chat';
  session: OT.Session;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;

  startTime: number;
  tokSession: string;
  tokToken: string;
  
  
  constructor(
    private ref: ChangeDetectorRef,
    private opentokService: OpentokService,
    private chatService: ChatService
    ) {
      this.changeDetectorRef = ref;
      this.chatService.receiveDjInfo().subscribe(djInfo => {
        this.tokSession = djInfo.tokSession
        this.tokToken = djInfo.tokToken
        
        console.log(this.tokToken, this.tokSession, 'these the session')
      })
  }
    
  ngOnInit () {
    this.chatService.getDjInfo();
    }
  
  ngAfterViewInit(): void {
    // this.opentokService.initSession().then((session: OT.Session) => {
    //   this.session = session;
    //   this.session.on('streamCreated', (event) => {
    //     this.streams.push(event.stream);
    //     this.changeDetectorRef.detectChanges();
    //   });
    //   this.session.on('streamDestroyed', (event) => {
    //     const idx = this.streams.indexOf(event.stream);
    //     if (idx > -1) {
    //       this.streams.splice(idx, 1);
    //       this.changeDetectorRef.detectChanges();
    //     }
    //   });
    // })
    // .then(() => this.opentokService.connect())
    // .catch((err) => {
    //   console.error(err);
    //   alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
    // });
  }
  }
