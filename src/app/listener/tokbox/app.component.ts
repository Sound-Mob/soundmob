import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import config from '../../config.js'
import * as OT from '@opentok/client';
import { OpentokService } from '../../services/opentok.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-tokbox',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ OpentokService ]
})
export class AppComponent implements OnInit {
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
      
  }
    
  ngOnInit () {
    this.chatService.receiveDjInfo().subscribe(djInfo => {
      // console.log(djInfo, " in observable in listener component")
      this.tokSession = djInfo[0].sessionid
      this.tokToken = djInfo[0].sessiontoken
     
      this.fireSession(djInfo[0].sessionid, djInfo[0].sessiontoken)
      // console.log(this.tokToken, this.tokSession, 'these the session')
    })
    this.chatService.getDjInfo();
    
    
    }
  
  
    fireSession(sessionId, token){
      // console.log(sessionId, " in fire")
      const { API_KEY } = config;
      // console.log(token, " TOKEN in fire session")
      this.opentokService.initSession(API_KEY, sessionId, token)
        .then((sessionId: any) => {
          // console.log(sessionId, " in fire session callback")
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
