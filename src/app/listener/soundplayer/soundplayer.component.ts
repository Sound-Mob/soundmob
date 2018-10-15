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

  video: string;

  constructor(private chatService: ChatService) {
  
    this.chatService.listenerReceiveSongDetails()
      .subscribe(songinfo => {
       
        
        let startAt = songinfo['listenerStartTime'] - songinfo['songinfo'][0].starttime;
        // console.log(startAt, " start time ready for vid");
        this.video = `https://www.youtube.com/embed/${songinfo['songinfo'][0].songid}?start=${startAt}&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1`
        
      })
  }
  ngOnInit() {
    this.chatService.listenerGetSongDetails()
  }
}
