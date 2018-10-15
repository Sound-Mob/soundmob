import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { DjlistService } from "../services/djlist.service";
import { ChatService } from "../services/chat.service";

@Component({
  selector: "app-posts",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.css"]
})
export class FeaturedComponent implements OnInit {
  activeDj: Object;
  prop: string;

  

  constructor(private http: HttpClient, private djList: DjlistService, private djJoin: ChatService) {
    
  }

  ngOnInit(){
    this.djList.liveDjReq();

    this.djList.liveDj()
      .subscribe((data) => this.activeDj = data);
  }

  joinDj(event){
    console.log(event.target, 'thisthe event log')
    let sockAndTok = event.target.id.split("---")

    this.djJoin.joinRoom(sockAndTok);
    // console.log(sockAndTok, " google id");
    
  }

}
