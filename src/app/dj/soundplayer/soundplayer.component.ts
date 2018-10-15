import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SoundBoardService } from '../../services/sound-board.service';
@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {

  items: any;
  sounds: Array<{ name: string, mediaLink: string }> = [];



  soundBoardMediaInformation = [];

  items:any;
  sounds: Array<{name:string, mediaLink: string}> =[];
  
  constructor(private http: HttpClient, private soundBite:SoundBoardService) { }
  ngOnInit() {
     return this.http.get('/test')
     .subscribe(( items ) => {
      //  console.log(items);
      this.items = items
        // return items.items.map(item => ({ name: item.name,mediaLink: item.mediaLink }));
        this.buttonMaker();
      });

   }
   onClick(event) {
    //  console.log(event.target.id);
     this.soundBite.soundEmit(event.target.id);
    
   }
   buttonMaker() {
    this.items.items.map((item) => {
      this.sounds.push({ name: item.name, mediaLink: item.mediaLink })
       
     })
   }
 


}