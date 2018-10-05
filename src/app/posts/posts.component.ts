import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  data = [];
  firstName = '';
  lastName = '';
  show: Boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('yupppy');
    return this.http.get('/api/tester')
      .subscribe(
        (data) => {
          console.log(data, 'data');
          this.data.push(data);
        }
      );
  }
}



