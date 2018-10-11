import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DjlistService {

  private socket = io('ws://localhost:3000', { transports: ['websocket'] })

  constructor() { }

  liveDj() {
    let observable = new Observable(observer => {
      this.socket.on('djList', (data) => {
        console.log(data);
        observer.next(data);
      });
    });
    return observable;
  }

  liveDjReq() {
    console.log("request made");
      this.socket.emit('djListReq');
  }

}
