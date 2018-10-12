import { Component, OnInit,} from '@angular/core';


@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {

  videos: any[] = [
    {
      title: 'mazda',
      video: 'https://www.youtube.com/embed/3lX50Lh2Iec'
    },
    {
      title: 'honda',
      video: 'https://www.youtube.com/embed/KgtizhlbIOQ'
    }
  ];

  video: string = this.videos[0].video;

  constructor() {
  }
  ngOnInit() {
  }
  
}
