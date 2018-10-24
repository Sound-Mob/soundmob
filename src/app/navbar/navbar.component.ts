import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient, private disconnect: ChatService) { }

  ngOnInit() {
  }

  logOut(){
    this.http.get('auth/logout');
    this.disconnect.djDisconnect();
  }

}
