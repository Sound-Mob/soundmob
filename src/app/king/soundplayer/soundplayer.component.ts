import { Component, OnInit,} from '@angular/core';


@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundplayerComponent implements OnInit {

  // videos: any[] = [
  //   {
  //     title: 'mazda',
  //     video: 'https://www.youtube.com/watch?v=Z71tcJtgfN8'
  //   },
  //   {
  //     title: 'honda',
  //     video: 'https://www.youtube.com/watch?v=B4iz-VVap1w'
  //   }
  // ]

  video: string = 'https://www.youtube.com/watch?v=Z71tcJtgfN8'

  constructor() {
  }
  ngOnInit() {
  }
  
}
