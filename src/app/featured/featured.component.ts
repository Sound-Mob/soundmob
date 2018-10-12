import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Component({
  selector: "app-posts",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.css"]
})
export class FeaturedComponent implements OnInit {
  data = [];
  firstName = '';
  lastName = '';
  show: Boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log('yupppy');
    return this.http.get('/api/api')
      .subscribe(
        (data) => {
          console.log(data)
          this.data.push(data[0]);
         
        }
      );
  }
}



