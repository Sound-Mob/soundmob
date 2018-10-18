import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  public count: number = 0;
  public songs: object;
  public paused: boolean = false;
  public pausedAt: number;
  public currentSongs: object;
  public pauseButton: boolean = true;
  constructor(private chatService: ChatService, private http: HttpClient) {
    this.chatService.receiveSongs()
      .subscribe(songs => {
        this.songs = songs;
        console.log({songs}, " receive songs happening in dj");
      })
    this.chatService.receiveSongStatusRequest()
      .subscribe(() => {
        console.log(this.songs[this.count], " video id before sending status")
        console.log(this.cleanTime(), " time id before sending status")
        this.chatService.sendSongStatus(this.songs[this.count], this.cleanTime());
      })
   }
  init() {
    var tag = document.createElement('script');
    tag.src = 'http://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();
    // this.video = '14WE3A0PwVs' //video id

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.player = new window['YT'].Player('player', {
        videoId: this.video,
        playerVars: {
          'autoplay': 1},
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            console.log('iFrame ready', this.player.getVolume());
          },
        }
      });
    };
  }

  current() {
    this.chatService.changeSong(this.currentSongs[this.count].photo)
  }

  pauseCast(){
    if(this.pauseButton){
      this.pauseButton = false
    } else {
      this.pauseButton = true
    }
    console.log(this.paused)
    if (this.paused){
      this.player.loadVideoById(this.songs[this.count], this.pausedAt);
      console.log(this.pausedAt,"should be sending unpause")
      this.paused = false;
    } else {
      this.player.pauseVideo();
      this.paused = true;
    }
    
  }

  startCast() {
    this.init();
    this.player.loadVideoById(this.songs[this.count])
    console.log("start cast was fired", this.songs[this.count])
    if (this.count !== 0){
      // this.chatService.djStartCast(this.songs[this.count]);
      this.chatService.sendUnpause(this.songs[this.count], this.cleanTime());
    }
    
    this.http.post('djView/songDetails', { songs: this.songs })
      .subscribe((data) => {
        this.currentSongs = data;
        this.current()
      });
  }
  onPlayerStateChange(event) {
    console.log(event.data, window['YT'].PlayerState.PLAYING, window['YT'].PlayerState.PAUSED, window['YT'].PlayerState.ENDED)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          let timestamp = this.cleanTime();
          this.chatService.sendPause(this.songs[this.count], timestamp);
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
          let timestamp = this.cleanTime();
          this.pausedAt = this.cleanTime();
          this.chatService.sendUnpause(this.songs[this.count], timestamp);
        };
        break;
      case window['YT'].PlayerState.ENDED:
      this.count = this.count+1;
        console.log("start cast was fired", this.songs[this.count])
        console.log("start cast was fired", this.songs)
        // work around to make
        this.player.seekTo(this.player.getDuration(), true);
        this.startCast();
        // this.chatService.djStartCast(this.songs[this.count]);
        break;
    };
  };
  //utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };
  onPlayerError(event) {
    
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };
}