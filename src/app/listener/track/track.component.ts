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
        console.log("received pause ping", pauseInfo)
        this.video = pauseInfo['songId'];
        this.pausedAt = pauseInfo['pausedAt'];
        this.pauseCast();
      });
    this.chatService.resumeListener()
      .subscribe(resumeInfo => {
        console.log("received resume ping", resumeInfo)
       this.trackTitle = resumeInfo['name'];

        this.trackPhoto = resumeInfo['photo'];
        this.video = resumeInfo['songId'];
        this.resumeAt = resumeInfo['resumedAt'];
        this.current(this.trackTitle,this.trackPhoto);
        this.resumeCast();
      })
    this.chatService.songStatusListener()
      .subscribe(songStatusInfo => {
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
          // 'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            // this.player.loadVideoById(this.video);
            console.log(" made it in youtube init")
            this.chatService.listenerGetSongDetails()
          },
        }
      });
    };
  }

  hearCast() {
   this.init();
    this.paused = false;
    if (this.player !== undefined){
      this.player.loadVideoById(this.video, this.startAt)
    }
  }
  resumeCast() {
    // this.init();
    this.paused = false;

      this.player.loadVideoById(this.video, this.resumeAt)

  }

  pauseCast() {
    if (this.paused) {
      this.player.loadVideoById(this.video, this.resumeAt)
      this.paused = false;
    } else {
      this.player.pauseVideo();
      this.paused = true;
    }

  }
  //utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };
  onPlayerError(event) {
    // debugger
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }
}
