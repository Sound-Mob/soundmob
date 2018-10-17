import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable, BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private songSource = new BehaviorSubject<string>('http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/52/j5/p052j5kp.jpg')
  currentSong = this.songSource.asObservable();
  // private socket = io(`http://localhost:3000`)
  private socket = io();

  constructor() { }
  changeSong(song:string) {
    this.songSource.next(song);
  }
  createRoom(googleId) {
    this.socket.emit('newroom', googleId)
  }

  sendMessage(data) {
    // console.log(data)
    // console.log("hehehehee")
    // console.log(this.socket.request, " in request");
    this.socket.emit('chat message', data)
  }

  receiveMessages() {
    let observable = new Observable<{ userName: string, lastName: string, message: string, id: string }>(observer => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  getDjInfo() {
    this.socket.emit('getDjInfo')
  }

  djStartCast(songId) {
    this.socket.emit('startCast', songId);
  }

  djGetSongDetails() {
    // console.log('recieved songgg   info')
    let observable = new Observable<{ songStartTime: string, songDuration: string }>(observer => {
      this.socket.on('castOn', (songInfo) => {
        // console.log(songInfo);
        observer.next(songInfo);
      });
    });
    return observable;
  }



  sendPause(songId, pausedAt){
    console.log("service of pause reached")
    this.socket.emit('paused', {songId, pausedAt});
  }

  sendUnpause(songId, resumedAt) {
    console.log(songId, resumedAt)
    this.socket.emit('unpause', { songId, resumedAt });
  }

  resumeListener() {
    let observable = new Observable<{ resumeInfo: object }>(observer => {
      this.socket.on('resumeRelay', (resumeInfo) => {
        console.log(" recieved relay")
        observer.next(resumeInfo);
      });
    });
    // console.log(observable)
    return observable;
  }

  pauseListener(){
    let observable = new Observable<{ pauseInfo: object }>(observer => {
      this.socket.on('pauseRelay', (pauseInfo) => {
        observer.next(pauseInfo);
      });
    });
    // console.log(observable)
    return observable;
  }

  receiveDjInfo() {
    console.log('recieved info')
    let observable = new Observable<{ timeInPlaylist: string, tokSession: string, tokToken: string }>(observer => {
      this.socket.on('startlistener', (djInfo) => {
        // console.log(djInfo);
        observer.next(djInfo);
      });
    });
    // console.log(observable)
    return observable;
  }

  joinRoom(djInfo) {
    this.socket.emit('roomroute', djInfo)
  }

  selectPlaylist(playlistId) {
    this.socket.emit('djSelectsPlaylist', playlistId);
  }

  receiveSongs() {
    console.log('recieved songs')
    let observable = new Observable<{ timeInPlaylist: string, tokSession: string, tokToken: string }>(observer => {
      this.socket.on('songList', (songs) => {
        // console.log(songs);
        observer.next(songs);
      });
    });
 
    return observable;
  }

  listenerReceiveSongDetails() {
    // console.log('recieved songgg   info')
    let observable = new Observable<{ songid: string, starttime: string, duration: string }>(observer => {
      this.socket.on('currentSong', (songInfo) => {
        
        observer.next(songInfo);
      });
    });
    // console.log(observable)
    return observable;
  }
  listenerGetSongDetails() {
    this.socket.emit("listenerGetCurrentSong");
  }
  djInfoReq() {
    this.socket.emit('djInfoReq')
  }

}
