import { Component, OnInit,} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { start } from 'repl';


@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {

  videos: any[] = [
    {
      title: 'mazda',
      video: 'https://www.youtube.com/embed/KgtizhlbIOQ?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
    },
    {
      title: 'honda',
      video: 'https://www.youtube.com/embed/KgtizhlbIOQ?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
    }
  ];

  // video: string;
  photo: string;
  name:string;
  constructor(private chatService: ChatService) {
  
    // this.chatService.listenerReceiveSongDetails()
    //   .subscribe(songinfo => {
    //     // console.log(" start time ready for vid");
    //     let startAt = songinfo['listenerStartTime'] - songinfo['songinfo'][0].starttime;
    //     if (startAt < 0 || startAt === null){
    //       startAt = 0;
    //     }
    //     // console.log( {songinfo, startAt}, " song info in received");
    //     // this.video = `https://www.youtube.com/embed/${songinfo['songinfo'][0].songid}?start=${startAt}&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1`
        
    //   })
  }
  ngOnInit() {
    // this.chatService.listenerGetSongDetails()
    this.chatService.currentListener
    .subscribe((data) => {
      console.log(data,' insidne the soundComponent listener')
      this.name = data;
    })
    this.chatService.currentListenerPhoto
    .subscribe((data) => {
      this.photo =data
    })
  }
}
