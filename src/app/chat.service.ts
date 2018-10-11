import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('ws://localhost:3000', { transports: ['websocket'] })

  constructor() { }
  
  createRoom(googleId){
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


}
