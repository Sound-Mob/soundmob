import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { DjProfileService } from 'src/app/services/dj-profile.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageToSend: string = '';
  values = '';
  name: object
  id: string
  profile: object; 
  

  chatMessages: Array<{ userName: string, lastName: string, message: string }> = [];

  constructor(private chatService: ChatService,
    private djProfileService: DjProfileService,
   ) {
    this.chatService.receiveMessages()
      .subscribe(data => {
        if (this.chatMessages.length > 4) {
          this.chatMessages.pop()
        }
        this.chatMessages.unshift(data)
      })
  }
   
  ngOnInit() {
    this.chatService.createRoom("hey");
    this.djProfileService.getProfileInfo()
      .subscribe(profile => {
        this.profile = profile
      })
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
