import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';



@Component({
  selector: 'app-listener-chat',
  templateUrl: './listener-chat.component.html',
  styleUrls: ['./listener-chat.component.css']
})
export class ListenerChatComponent implements OnInit {

  messageToSend: string = '';
  values = '';
  name: object
  id: string
  chatMessages: Array<{ userName: string, lastName: string, message: string }> = [];


  constructor(private chatService: ChatService) { 
  this.chatService.receiveMessages()
    .subscribe(data => {
      if (this.chatMessages.length > 10) {
        this.chatMessages.pop()
      }
    this.chatMessages.unshift(data)
    })
    

  }

ngOnInit() {
  
}


sendChatMessage() {
  const { messageToSend } = this;
  this.chatService.sendMessage(messageToSend);
  this.messageToSend = "";
}

getMessage() {
  this.chatService.receiveMessages()
    .subscribe(data => console.log(data))
}

}
