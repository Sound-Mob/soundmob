import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjViewRoutingModule } from './dj-view-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    DjViewRoutingModule
  ],
  declarations: [CommentsComponent, SoundplayerComponent, ProfileComponent, MainComponent]
})
export class DjViewModule { }
