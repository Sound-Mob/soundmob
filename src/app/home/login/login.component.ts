import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  
  ngOnInit() {
    const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
  }
  
  login(){
    console.log('yup');
    // this.http.get('/api/login',{

    // })
    // .subscribe(
    //   data => console.log(data)
    // );
    window.open('/api/login', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
  }
  test() {
    console.log('yupppy');
    this.http.get('/api/test')
      .subscribe(
        data => console.log(data)
      );
  }
}
