import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, SoundplayerComponent, CommentsComponent],
  exports: [
    ProfileComponent,
    SoundplayerComponent,
    CommentsComponent
  ]
})
export class UserViewModule { }
