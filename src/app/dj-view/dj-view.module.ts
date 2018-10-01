import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjViewRoutingModule } from './dj-view-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';
import { SoundboardComponent } from './soundboard/soundboard.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { QueueComponent } from './add-songs/queue/queue.component';
import { SearchComponent } from './add-songs/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    DjViewRoutingModule
  ],
  declarations: [CommentsComponent, ProfileComponent, SoundboardComponent, SoundplayerComponent, AddSongsComponent, QueueComponent, SearchComponent]
})
export class DjViewModule { }
