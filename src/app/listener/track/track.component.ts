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
<<<<<<< HEAD
  constructor(private chatService: ChatService) {
=======
  public trackTitle: string;
  public trackPhoto: string;
  constructor(private chatService: ChatService) { 
>>>>>>> 9f2f1370bb13d025d7393a59d098b20a93dd4264
    this.chatService.pauseListener()
      .subscribe(pauseInfo => {
        this.video = pauseInfo['songId'];
        this.pausedAt = pauseInfo['pausedAt'];
        this.pauseCast();
      });
    this.chatService.resumeListener()
      .subscribe(resumeInfo => {
        console.log('here in listener', resumeInfo);
      this.trackTitle = resumeInfo['name'];
        this.trackPhoto = resumeInfo['photo'];
        this.video = resumeInfo['songId'];
        this.resumeAt = resumeInfo['resumedAt'];
        // console.log(this.video, this.resumeAt)
        // console.log("this.video, this.resumeAt")
        this.current(this.trackTitle,this.trackPhoto);
        this.pauseCast();
<<<<<<< HEAD
      });

    this.chatService.listenerReceiveSongDetails()
      .subscribe(songinfo => {
        console.log("song info recieved", songinfo)

        this.video = songinfo['songinfo'][0].songid;
        // this.init();
        this.hearCast();
      });
=======
      })
    this.chatService.songStatusListener()
      .subscribe(songStatusInfo => {
        this.video = songStatusInfo['songId'];
        this.startAt = songStatusInfo['timestamp'];
        console.log(songStatusInfo, " songstatusinfo and start at")
        // console.log("this.video, this.resumeAt")
        // this.player.loadVideoById(this.video, this.startAt)

        this.hearCast();
      })
    
    // this.chatService.listenerReceiveSongDetails()
    //   .subscribe(songinfo => {
    //     console.log("song info recieved", songinfo)
    //     this.startAt = songinfo['listenerStartTime'] - parseInt(songinfo['songinfo'][0].starttime);
    //     console.log(this.startAt, "  iojoighoaj")
    //     this.video = songinfo['songinfo'][0].songid;
    //     this.init();
    //     this.hearCast();
    //   })
>>>>>>> 9f2f1370bb13d025d7393a59d098b20a93dd4264
  }
  init() {
    var tag = document.createElement('script');
    tag.src = 'http://www.youtube.com/iframe_api';
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

=======
    console.log(" in ng init")
    
>>>>>>> 9f2f1370bb13d025d7393a59d098b20a93dd4264
  }

  hearCast() {
   this.init();
    console.log(this, "  in hear cast")
    console.log(this.startAt, "  in hear cast")
    console.log(this.player, "  in hear cast")
    if (this.player !== undefined){
      console.log(this.startAt, "  in hear cast")
      this.player.loadVideoById(this.video, this.startAt)
    }

    // console.log("start cast was fired", this.player)

  }

  pauseCast() {
    if (this.paused) {
      console.log(this.player, "paused is true in pausecast")
      this.player.loadVideoById(this.video, this.resumeAt)
      this.paused = false;
    } else {
      console.log("paused is false in pausecast")
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
    };
  };
}