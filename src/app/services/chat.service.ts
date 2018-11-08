import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable, BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private songSource = new BehaviorSubject<string>('//uproxx.files.wordpress.com/2015/02/say-anything-main-review.jpg')
  currentSong = this.songSource.asObservable();
  private songName = new BehaviorSubject<string>('')
  currentName = this.songName.asObservable();
  private listenerSong = new BehaviorSubject<string>("");
  currentListener = this.listenerSong.asObservable();
  private listenerPhoto = new BehaviorSubject<string>("");
  currentListenerPhoto = this.listenerPhoto.asObservable();
  private socket = io();

  
  
  constructor() { }
  changeSong(song:string) {
    this.songSource.next(song);
  }

  logOut(){
    this.socket.emit('disconnect');
  }
  changeName(name:string) {
    this.songName.next(name);
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
    let observable = new Observable<{ songStartTime: string, songDuration: string }>(observer => {
      this.socket.on('castOn', (songInfo) => {
        observer.next(songInfo);
      });
    });
    return observable;
  }

  djDisconnect(){
    this.socket.emit('discon')
  }

  sendPause(songId, pausedAt){
    this.socket.emit('paused', {songId, pausedAt});
  }

  sendUnpause(songId, resumedAt) {
    this.socket.emit('unpause', { songId, resumedAt });
  }

  resumeListener() {
    let observable = new Observable<{ resumeInfo: object }>(observer => {
      this.socket.on('resumeRelay', (resumeInfo) => {
        observer.next(resumeInfo);
      });
    });
    return observable;
  }

  songStatusListener() {
    let observable = new Observable<{ songStatusInfo: object }>(observer => {
      this.socket.on('songStatusToListener', (songStatusInfo) => {
        observer.next(songStatusInfo);
      });
    });
    return observable;
  }

  receiveSongStatusRequest() {
    let observable = new Observable<{ songStatus: object }>(observer => {
      this.socket.on('songStatusRequest', (songStatus) => {
        observer.next(songStatus);
      });
    });
    return observable;
  }

  listenForVolume() {
    let observable = new Observable<{ volume: object }>(observer => {
      this.socket.on('changeVolume', (volume) => {
        observer.next(volume);
      });
    });
    return observable;
  }

  changeVolume(volume){
    this.socket.emit('changeVolume', volume);
  }

  sendSongStatus(songId, timestamp) {
    this.socket.emit('songStatus', { songId, timestamp });
  }

  pauseListener(){
    let observable = new Observable<{ pauseInfo: object }>(observer => {
      this.socket.on('pauseRelay', (pauseInfo) => {
        observer.next(pauseInfo);
      });
    });
    return observable;
  }

  receiveDjInfo() {
    let observable = new Observable<{ timeInPlaylist: string, tokSession: string, tokToken: string }>(observer => {
      this.socket.on('startlistener', (djInfo) => {
        observer.next(djInfo);
      });
    });
    return observable;
  }
  getInfoListener() {
    let observable = new Observable<object>(observer => {
      this.socket.on('info4Listener', (djInfo) => {
        observer.next(djInfo);
      });
    });
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
        observer.next(songs);
      });
    });
    return observable;
  }

  listenerGetSongDetails() {
    this.socket.emit("listenerGetCurrentSong");
  }

  djInfoReq() {
    this.socket.emit('djInfoReq')
  }
}
