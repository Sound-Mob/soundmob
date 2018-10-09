import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {KingRoutingModule} from './king-routing.module';

import { KingComponent } from "./king.component";
import { ProfileComponent } from './profile/profile.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { SubscriberComponent } from "../tokbox/subscriber/subscriber.component";
import { TokboxComponent } from "../tokbox/tokbox.component";
import { PublisherComponent } from "../tokbox/publisher/publisher.component";



@NgModule({
    imports:[
        CommonModule,
        KingRoutingModule
    ],
    declarations: [KingComponent, ProfileComponent, SoundplayerComponent, CommentsComponent, CommentComponent, TokboxComponent, PublisherComponent, SubscriberComponent]

})

export class KingModule{}