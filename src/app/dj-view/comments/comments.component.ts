import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  data = [];

  show: Boolean;

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log("Response From Websocket Server: " + msg)
    });
  }

  ngOnInit() {
  }

  private message = {
    author: 'elliot forbes',
    message: 'howdy folks'
  }

  sendMsg() {
    console.log("New Message Sent From Client");
    this.chatService.messages.next(this.message);
  }

}
