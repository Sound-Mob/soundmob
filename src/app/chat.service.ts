import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('ws://localhost:4567', { transports: ['websocket'] })

  constructor() { }

  sendMessage(data) {
    this.socket.emit('chat message', data)
  }

  receiveMessages() {
    let observable = new Observable<{ userName: string, message: string }>(observer => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }


}
