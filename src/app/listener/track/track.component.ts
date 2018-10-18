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
  constructor(private chatService: ChatService) {
    this.chatService.pauseListener()
      .subscribe(pauseInfo => {
        this.video = pauseInfo['songId'];
        this.pausedAt = pauseInfo['pausedAt'];
        this.pauseCast();
      });
    this.chatService.resumeListener()
      .subscribe(resumeInfo => {
       this.trackTitle = resumeInfo['name'];
        this.trackPhoto = resumeInfo['photo'];
        this.video = resumeInfo['songId'];
        this.resumeAt = resumeInfo['resumedAt'];
        this.current(this.trackTitle,this.trackPhoto);
        this.pauseCast();
      })
    this.chatService.songStatusListener()
      .subscribe(songStatusInfo => {
        this.video = songStatusInfo['songId'];
        this.startAt = songStatusInfo['timestamp'];
        this.hearCast();
      })

<<<<<<< HEAD
    // this.chatService.listenerReceiveSongDetails()
    //   .subscribe(songinfo => {
    //     console.log("song info recieved", songinfo)
    //     this.startAt = songinfo['listenerStartTime'] - parseInt(songinfo['songinfo'][0].starttime);
    //     console.log(this.startAt, "  iojoighoaj")
    //     this.video = songinfo['songinfo'][0].songid;
    //     this.init();
    //     this.hearCast();
    //   })
=======
>>>>>>> 0d3da53f45f9af7d11a6c2cf948468ec949ebf4f
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
            this.chatService.listenerGetSongDetails()
          },
        }
      });
    };
<<<<<<< HEAD
    console.log(" in ng init")

=======
>>>>>>> 0d3da53f45f9af7d11a6c2cf948468ec949ebf4f
  }

  hearCast() {
   this.init();
    if (this.player !== undefined){
      this.player.loadVideoById(this.video, this.startAt)
    }
<<<<<<< HEAD

    // console.log("start cast was fired", this.player)

=======
>>>>>>> 0d3da53f45f9af7d11a6c2cf948468ec949ebf4f
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
    debugger
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
