import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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

  constructor() { }

  ngOnInit() {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'my-auth-token'
    // }) 
  }

  login() {
    console.log('yup');
<<<<<<< HEAD
  // window.location.href="/auth"
    this.http.get('/auth')
    .subscribe(
      data => console.log(data)
    )
=======
    // window.location.href="/auth"
    //  this.http.get('/auth')
    //   .subscribe(
    //     data => console.log(data)
    //   )
>>>>>>> ffd478a0429cd77bd8e40bc5c1a16b2eac35ae2e
    // window.open('/api/login', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
  }
}

