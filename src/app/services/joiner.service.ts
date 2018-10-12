import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class JoinerService {

  private socket = io('ws://localhost:3000', { transports: ['websocket'] })

  constructor() { }

  joinRoom(djId) {
    this.socket.emit('roomroute', djId)
  }
}
