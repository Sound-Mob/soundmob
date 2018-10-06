import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  messageToSend: string = ''; 
  values = '';
  chatMessages: Array<{ userName: string, message: string }> = [];
  
  constructor(private chatService:ChatService) { 
    this.chatService.receiveMessages()
      .subscribe(data => {
        console.log(data)
        this.chatMessages.push(data)
      })
  }

  ngOnInit() {
  }


  sendChatMessage() {
    const { messageToSend } = this;
    this.chatService.sendMessage(messageToSend);
    this.messageToSend = ""
    
  }

  getMessage(){
    this.chatService.receiveMessages()
      .subscribe(data => console.log(data))
  }


}
