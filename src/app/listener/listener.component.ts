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
<<<<<<< HEAD
    this.soundBoard.soundReceive()
    .subscribe(data => {
      console.log('it hits')
     this.sound = data.toString();
    })
=======
    
>>>>>>> ce4d05c71e30153c9abb2b266fe6aacd0dc1c49a
  }

}
