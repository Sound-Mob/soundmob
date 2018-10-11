import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjRoutingModule } from './dj-routing.module';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



import { OpentokService } from '../services/opentok.service';
import { AppComponent } from './tokbox/app.component';
import { SubscriberComponent } from './tokbox/subscriber/subscriber.component';
import { PublisherComponent } from './tokbox/publisher/publisher.component';
import { ChatComponent } from './chat/chat.component';




@NgModule({
  imports: [
    CommonModule,
    DjRoutingModule,
    FormsModule,
  ],
  declarations: [
    SoundplayerComponent,
    ProfileComponent,
    MainComponent,
    SearchComponent,
    AppComponent,
    SubscriberComponent, 
    PublisherComponent,
    ChatComponent
  ],
  providers: [OpentokService]
})
export class DjModule { }
