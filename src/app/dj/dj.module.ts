import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjRoutingModule } from './dj-routing.module';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';

import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';



import { OpentokService } from '../services/opentok.service';
import { AppComponent } from './tokbox/app.component';
import { PublisherComponent } from './tokbox/publisher/publisher.component';
import { ChatComponent } from './chat/chat.component';
import { YoutubePipe } from '../pipes/youtube.pipe';
import { TrackComponent } from './track-component/track.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  imports: [
    CommonModule,
    DjRoutingModule,
    FormsModule,
    MatSliderModule,
  ],
  declarations: [
    SoundplayerComponent,
    MainComponent,
    AppComponent,
    PublisherComponent,
    ChatComponent, 
    YoutubePipe,
    TrackComponent,
    MatSliderComponent,
    NavbarComponent,
  ],
  providers: [OpentokService]
})
export class DjModule { }
