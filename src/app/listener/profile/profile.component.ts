import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: object;
  constructor(private chatService:ChatService) { }

  ngOnInit() {
   
      this.chatService.getInfoListener()
      .subscribe(data => {
       this.profile = data
     });
  }
}
