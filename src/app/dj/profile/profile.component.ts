import { Component, OnInit } from '@angular/core';
import { DjProfileService } from '../../services/dj-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: object;

  constructor(private djProfileService: DjProfileService) { }

  ngOnInit() {
    this.djProfileService.getProfileInfo()
    .subscribe(profile =>{
      this.profile = profile
    })
  }

  session(){
    
  }
}
