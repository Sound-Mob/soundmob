import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SoundBoardService {

  private socket = io();

  constructor() { }

  soundEmit(sound) {
    this.socket.emit('soundEmit', sound);
  }

  playlistEmit(playlistId) {
    this.socket.emit('djSelectsPlaylist', playlistId)
  }

  soundReceive() {
    let observable = new Observable<{ sound: string }>(observer => {
      this.socket.on('soundRelay', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
