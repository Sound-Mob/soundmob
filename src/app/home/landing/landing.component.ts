import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Access-Control-Allow-Origin': "*"
//   })
// };
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {

  }

  login() {
    localStorage.setItem('clicked', 'true')
  }
}

