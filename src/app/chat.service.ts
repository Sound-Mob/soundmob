import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { WebsocketService } from './websocket.service'
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators';


export interface Message {
  author: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages: Subject<Message>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService
      .connect(environment.CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        }
      })
  }
}
