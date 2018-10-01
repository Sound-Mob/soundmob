import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongSearchComponent } from './song-search/song-search.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { SoundboardButtonComponent } from './soundboard-button/soundboard-button.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
