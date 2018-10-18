import { Component, OnInit, Input} from '@angular/core';
import { SoundBoardService } from '../services/sound-board.service';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-king',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit{
sound:string = '';
  @Input() sai:'sai';




  constructor(private soundBoard: SoundBoardService, private chatService: ChatService) {
  }

  ngOnInit() {
    this.soundBoard.soundReceive()
    .subscribe(data => {
      console.log('it hits')
     this.sound = data.toString();
    })
   
  }


}
