import { Component, OnInit, } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { start } from 'repl';


@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {

  photo: string;
  name: string;
  constructor(private chatService: ChatService) { }
  ngOnInit() {
    
    // this.chatService.listenerGetSongDetails()
    this.chatService.currentListener
      .subscribe((data) => {
        console.log(data, ' insidne the soundComponent listener')
        this.name = data;
      })
    this.chatService.currentListenerPhoto
      .subscribe((data) => {
        this.photo = data
      })
  }
}