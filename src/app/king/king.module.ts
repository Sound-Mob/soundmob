import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {KingRoutingModule} from './king-routing.module';

import { KingComponent } from "./king.component";
import { ProfileComponent } from './profile/profile.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';

import { AppComponent } from "./tokbox/app.component";
import { PublisherComponent } from "./tokbox/publisher/publisher.component";
import { SubscriberComponent } from "./tokbox/subscriber/subscriber.component";
import { FormsModule } from "@angular/forms";
import { ListenerChatComponent } from "../listener-chat/listener-chat.component";





@NgModule({
    imports:[
        CommonModule,
        KingRoutingModule,
        FormsModule,
    ],
    declarations: [
        KingComponent,
        ProfileComponent,
        SoundplayerComponent,
        AppComponent,
        SubscriberComponent,
        PublisherComponent,
        ListenerChatComponent
    ]

})

export class KingModule{}