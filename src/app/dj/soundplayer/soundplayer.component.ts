import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SoundBoardService } from '../../services/sound-board.service';
@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {
  songSelected: boolean = false;
  viewedCast: boolean = false;
  viewedBoard: boolean = false;
  madeNew: boolean = false;
  wasAdded: boolean = false;
  wasNamed: boolean = false;

  items: any;
  sounds: Array<{ name: string, mediaLink: string }> = [];
  playlists: Array<{ name: string, id: string }> = [];
  newcastid: string;
  searchResults: Array<{ name: string, id: string }> = [];
  castName: string;

  constructor(private http: HttpClient, private soundBite:SoundBoardService) { }
  ngOnInit() {
      this.http.get('/test')
      .subscribe(( items ) => {
      //  console.log(items);
      this.items = items
        // return items.items.map(item => ({ name: item.name,mediaLink: item.mediaLink }));
        this.buttonMaker();
      });
      this.http.get('/djView/playlist').subscribe((info)=>{
        console.log(info, " data in dj soundplayer")
        this.playlists.push(info['items']);
        info['items'].map((item) => {
          this.playlists.push({ name: item.snippet.localized.title, id: item.id })

        })
      })
    }

  playlistClick(event) {
    this.soundBite.playlistEmit(event.target.id);
    this.newcastid = event.target.id;
    this.viewedCast = false;
  }
  openNewCastComponent() {
    if(this.madeNew === true){
      this.madeNew = false
    } else {
      this.madeNew = true
    }
    console.log("this will open the entire new cast creator")
  }
  searchSongToCast(song){
    this.http.post('djView/searchSong', { song }).subscribe((data) => {
      console.log(data);
      this.searchResults = data['items'].map((songObj)=>{
        return { name: songObj.snippet.title, id: songObj.id.videoId }
      })
    })
  }


  showCasts(){
    if (this.viewedCast === true) {
      this.viewedCast = false;
    } else {
      this.viewedCast = true;
    }
  }

  showSoundboard(){
    if(this.viewedBoard === true) {
      this.viewedBoard = false;
    } else {
      this.viewedBoard = true;
    }
  }

  songSelect(event){
    this.songSelected = true;
    this.http.post('/djView/insertSong', { songId: event.target.id, playlistId: this.newcastid})
    .subscribe((data)=>{
      console.log(data);
    })
  }

  submitCastName(title){
    this.castName = title;
    this.wasNamed = true;
    this.http.post('djView/nameCast',{title}).subscribe((data)=>{
      this.newcastid = data['id'];
    })
  }
   soundClick(event) {
    //  console.log(event.target.id);
     this.soundBite.soundEmit(event.target.id);
    
   }

    addToCast(){
      if (this.wasAdded === true) {
        this.wasAdded = false;
      } else {
        this.wasAdded = true;
      }
      console.log("would pop up song search")
   }
   buttonMaker() {
    this.items.items.map((item) => {
      // this.sounds.push({ name: item.name, mediaLink: item.mediaLink })
      this.sounds.push({ name: item.name.substring(-4), mediaLink: item.mediaLink })
     })
   }
 


}