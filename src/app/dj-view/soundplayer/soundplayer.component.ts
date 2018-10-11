import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  soundBoardMediaInformation = [];

  ngOnInit() {


    this.http.get('/test')
      .subscribe(({ items }) => {
        //console.log(data);
        // let { items } = data;
        return items.map(item => (
          this.soundBoardMediaInformation.push({
            name: item.name,
            mediaLink: item.mediaLink
          })
        ));
      });
    console.log(this.soundBoardMediaInformation);
  }

}