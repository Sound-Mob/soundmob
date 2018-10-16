import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  count: number = 0;
  songs: object;
  songStartTime: string;
  songDuration: string;
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
    this.chatService.djGetSongDetails()
    .subscribe(details => {
      this.songStartTime = details.songStartTime;
      this.songDuration = details.songDuration;
      setTimeout(()=>{
        this.castContinue();
      }, details.songDuration);
    })
  }

  video: string 
  // trigger cast on after duration runs
  castContinue(){
    let time;
    if (this.songDuration){
      time = this.songDuration;
      console.log(time, " in if yes")
    } else {
      time = 6000;
      console.log(time, " in if no")
    }
    setTimeout(()=>{
      this.startCast()
    }, time * 1000);
    let counter = this.count + 1;
    if (this.songs[counter]){
      this.count++;
    }
  }


  // start music
  startCast() {
    this.video = `https://www.youtube.com/embed/${this.songs[this.count]}?start=0&rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1`
    this.chatService.djStartCast(this.songs[this.count]);
  }

  ngOnInit() {
    this.chatService.createRoom("hey");
    // this.chatService.selectPlaylist('iddoeooe');
    
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
