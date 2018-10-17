import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { DjlistService } from "../services/djlist.service";
import { ChatService } from "../services/chat.service";
import { DjProfileService } from "../services/dj-profile.service";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-posts",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.css"]
})
export class FeaturedComponent implements OnInit {
  activeDj: Object;
  prop: string;
  profile: object;

  

  constructor(
    private http: HttpClient,
    private djList: DjlistService,
    private djJoin: ChatService,
    private djProfileService: DjProfileService,
    ) {
    
  }

  ngOnInit(){
    this.djList.liveDjReq();

    this.djList.liveDj()
      .subscribe((data) => this.activeDj = data);

    this.djProfileService.getProfileInfo()
      .subscribe(profile => {
        this.profile = profile
      })
  }

  joinDj(event){
    console.log(event.target, 'thisthe event log')
    let sockAndTok = event.target.id.split("---")

    this.djJoin.joinRoom(sockAndTok);
    // console.log(sockAndTok, " google id");
    
  }

}
