import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { ListenerRoutingModule } from './listener-routing.module';

import { ListenerComponent } from "./listener.component";
import { ProfileComponent } from './profile/profile.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';

import { AppComponent } from "./tokbox/app.component";
import { PublisherComponent } from "./tokbox/publisher/publisher.component";
import { SubscriberComponent } from "./tokbox/subscriber/subscriber.component";
import { FormsModule } from "@angular/forms";

import { ListenerChatComponent } from "./listener-chat/listener-chat.component";
import { YoutubePipe } from "../pipes/youtube.pipe";
import { ListenerTrackComponent } from './track/track.component';
import { NavbarComponent } from './navbar/navbar.component';






@NgModule({
    imports:[
        CommonModule,
        ListenerRoutingModule,
        FormsModule,
    ],
    declarations: [
        ListenerComponent,
        ProfileComponent,
        SoundplayerComponent,
        AppComponent,
        SubscriberComponent,
        PublisherComponent,
        YoutubePipe,
        ListenerChatComponent,
        ListenerTrackComponent,
        NavbarComponent
    ]

})

export class ListenerModule{}