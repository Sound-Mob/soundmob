import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ChatService } from '../../chat.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  messageToSend: string = ''; 
  values = '';
  name: object
  id: string
  chatMessages: Array<{ userName: string, lastName: string, message: string }> = [];
  
  constructor(private chatService:ChatService) { 
    this.chatService.receiveMessages()
      .subscribe(data => {

        if(this.chatMessages.length > 10){
            this.chatMessages.pop()
        }
        this.chatMessages.unshift(data)
      })
    
  }

  ngOnInit() {
    this.chatService.createRoom('123ween23');
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
