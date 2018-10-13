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
      video: 'https://www.youtube.com/embed/KgtizhlbIOQ?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
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
