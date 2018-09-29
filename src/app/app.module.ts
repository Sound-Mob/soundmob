import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongSearchComponent } from './song-search/song-search.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { SoundboardButtonComponent } from './soundboard-button/soundboard-button.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SongSearchComponent,
    SoundBoardComponent,
    SoundboardButtonComponent,
    MusicPlayerComponent,
    ProfileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
