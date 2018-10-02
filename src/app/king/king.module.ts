import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {KingRoutingModule} from './king-routing.module';

import { KingComponent } from "./king.component";
import { ProfileComponent } from './profile/profile.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
    imports:[
        CommonModule,
        KingRoutingModule
    ],
    declarations:[KingComponent, ProfileComponent, SoundplayerComponent, CommentsComponent]

})

export class KingModule{}