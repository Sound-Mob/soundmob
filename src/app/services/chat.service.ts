import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable, BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private songSource = new BehaviorSubject<string>('//ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/52/j5/p052j5kp.jpg')
  currentSong = this.songSource.asObservable();
  private listenerSong = new BehaviorSubject<string>("");
  currentListener = this.listenerSong.asObservable();
  private listenerPhoto = new BehaviorSubject<string>("");
  currentListenerPhoto = this.listenerPhoto.asObservable();
  // private socket = io(`http://localhost:3000`)
  private socket = io();

  constructor() { }
  changeSong(song:string) {
    this.songSource.next(song);
  }
  changeListenerSong(name:string) {
    this.listenerSong.next(name);
  }
  changeListenerPhoto(photo:string) {
    this.listenerPhoto.next(photo);
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

  songStatusListener() {
    let observable = new Observable<{ songStatusInfo: object }>(observer => {
      this.socket.on('songStatusToListener', (songStatusInfo) => {
        console.log(" recieved song status in listener")
        observer.next(songStatusInfo);
      });
    });
    // console.log(observable)
    return observable;
  }

  receiveSongStatusRequest() {
    let observable = new Observable<{ songStatus: object }>(observer => {
      this.socket.on('songStatusRequest', (songStatus) => {
        console.log(" recieved status request")
        observer.next(songStatus);
      });
    });
    // console.log(observable)
    return observable;
  }

  listenForVolume() {
    let observable = new Observable<{ volume: object }>(observer => {
      this.socket.on('changeVolume', (volume) => {
        console.log(" recieved volume change")
        observer.next(volume);
      });
    });
    // console.log(observable)
    return observable;
  }

  changeVolume(volume){
    this.socket.emit('changeVolume', volume);
  }

  sendSongStatus(songId, timestamp) {
    console.log("in send songstatus service")
    console.log(songId, timestamp)
    this.socket.emit('songStatus', { songId, timestamp });
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
  getInfoListener() {
    console.log('obboboobobob')
    let observable = new Observable<object>(observer => {
      this.socket.on('info4Listener', (djInfo) => {
        // console.log(djInfo);
        observer.next(djInfo);
      });
    });
    // return this.socket.on<object>('info4Listener', profile => {
    //   observer.next(profile)
    // });
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
