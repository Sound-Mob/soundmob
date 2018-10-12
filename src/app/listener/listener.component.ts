import { Component, OnInit,Input } from '@angular/core';
import { SoundBoardService } from '../services/sound-board.service';

@Component({
  selector: 'app-king',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {
sound:string = '';
  @Input() sai:'sai';




  constructor(private soundBoard: SoundBoardService) {
  }

  ngOnInit() {
    this.soundBoard.soundReceive()
    .subscribe(data => {
      
     this.sound = data.toString();
    })
  }

}
