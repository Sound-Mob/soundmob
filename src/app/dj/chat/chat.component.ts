import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  songs: object;
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
    this.chatService.receiveSongs()
    .subscribe(songs => {
      
      this.songs = songs;
      
    })
  }

  videos: any[] = [
    {
      title: 'mazda',
      video: 'https://www.youtube.com/embed/KgtizhlbIOQ?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
    },
    {
      title: 'honda',
      video: 'https://www.youtube.com/embed/KgtizhlbIOQ?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1'
    }
  ];

  video: string 
  startCast() {
    // this.video = this.videos[0].video;
    this.video = `https://www.youtube.com/embed/${this.songs[0]}?start=7&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1`
    console.log("started")
  }

  ngOnInit() {
    this.chatService.createRoom("hey");
    this.chatService.selectPlaylist('iddoeooe');
    
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
