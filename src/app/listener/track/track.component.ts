import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-listener-track',
  template: `<div class="max-width-1024">
      <div class="embed-responsive embed-responsive-16by9" id="player">
      </div>
    </div>`,
  styles: [`.max-width-1024 { max-width: 1024px; margin: 0 auto; }`],
})
export class ListenerTrackComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  public paused: boolean = true;
  public count: number = 0;
  public pausedAt: number = 0;
  public resumeAt: number = 0;
  public startAt: number = 0;
  public trackTitle: string;
  public trackPhoto: string;
  public volume: object;

  constructor(private chatService: ChatService) { 
    this.chatService.pauseListener()
      .subscribe(pauseInfo => {
        this.video = pauseInfo['songId'];
        this.pausedAt = pauseInfo['pausedAt'];
        this.pauseCast();
      })
    this.chatService.resumeListener()
      .subscribe(resumeInfo => {
       this.trackTitle = resumeInfo['name'];
        this.trackPhoto = resumeInfo['photo'];
        this.video = resumeInfo['songId'];
        this.resumeAt = resumeInfo['resumedAt'];
        this.current(this.trackTitle,this.trackPhoto);
        this.resumeCast();
      })
    this.chatService.songStatusListener()
      .subscribe(songStatusInfo => {
        console.log("in song status receive ", songStatusInfo)
        this.trackTitle = songStatusInfo['name'];
        this.trackPhoto = songStatusInfo['photo'];
        this.video = songStatusInfo['songId'];
        this.startAt = songStatusInfo['timestamp'];
        this.current(this.trackTitle,this.trackPhoto);
        this.hearCast();
      })
    this.chatService.listenForVolume()
      .subscribe(volume => {
        this.volume = volume;
        this.player.setVolume(this.volume)
        console.log(this.volume, " receive volume happening in listener");
      })

  }
  init() {
    var tag = document.createElement('script');
    tag.src = '//www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  current(name, photo) {
    this.chatService.changeListenerPhoto(photo)
    this.chatService.changeListenerSong(name);
  }

  ngOnInit() {
    
    this.init();

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.player = new window['YT'].Player('player', {
        videoId: this.video,
        startSeconds: this.startAt,
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            this.chatService.listenerGetSongDetails()
          },
        }
      });
    };
  }

  hearCast() {
    console.log("in hear cast")
   this.init();
    this.paused = false;
    if (this.player !== undefined){
      this.player.loadVideoById(this.video, this.startAt)
    }
  }
  resumeCast() {
      this.player.loadVideoById(this.video, this.resumeAt)
      this.paused = false;
  }

  pauseCast() {
  
    if (this.paused === false){
  
      this.player.pauseVideo();
      this.paused = true;
    }
      
    

  }
  onPlayerStateChange(event) {
    console.log(event.data, window['YT'].PlayerState.PLAYING, window['YT'].PlayerState.PAUSED, window['YT'].PlayerState.ENDED)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        this.paused = false;
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        this.paused = true;
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
          let timestamp = this.cleanTime();
          this.pausedAt = this.cleanTime();
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log("in ended")
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