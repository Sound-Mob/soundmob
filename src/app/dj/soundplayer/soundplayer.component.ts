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
  playlists: Array<{ name: string, id: string }> = [];
  newcastid: string;
  searchResults: Array<{ name: string, id: string }> = [];
  castName: string:

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
  }
  openNewCastComponent() {
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

  songSelect(event){
    console.log(event.target.id);
    this.http.post('/djView/insertSong', { songId: event.target.id, playlistId: this.newcastid, title: this.castName })
    .subscribe((data)=>{
      console.log(data);
    })
  }

  submitCastName(title){
    this.castName = title;
    this.http.post('djView/nameCast',{title}).subscribe((data)=>{
      this.newcastid = data['id'];
    })
  }
   soundClick(event) {
    //  console.log(event.target.id);
     this.soundBite.soundEmit(event.target.id);
    
   }
   buttonMaker() {
    this.items.items.map((item) => {
      this.sounds.push({ name: item.name, mediaLink: item.mediaLink })
       
     })
   }
 


}