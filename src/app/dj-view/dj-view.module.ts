import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { ProfileComponent } from './profile/profile.component';
import { SoundboardComponent } from './soundboard/soundboard.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SoundplayerComponent, ProfileComponent, SoundboardComponent, CommentsComponent],
  exports: [
    SoundplayerComponent,
    ProfileComponent,
    SoundboardComponent,
    CommentsComponent
  ]
})
export class DJViewModule { }
