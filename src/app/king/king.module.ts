import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {KingRoutingModule} from './king-routing.module';

import { KingComponent } from "./king.component";
import { ProfileComponent } from './profile/profile.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { AppComponent } from "./tokbox/app.component";
import { PublisherComponent } from "./tokbox/publisher/publisher.component";
import { SubscriberComponent } from "./tokbox/subscriber/subscriber.component";




@NgModule({
    imports:[
        CommonModule,
        KingRoutingModule
    ],
    declarations: [KingComponent, ProfileComponent, SoundplayerComponent, CommentsComponent, CommentComponent, AppComponent, SubscriberComponent, PublisherComponent]

})

export class KingModule{}