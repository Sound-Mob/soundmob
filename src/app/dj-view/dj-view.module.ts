import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjViewRoutingModule } from './dj-view-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { SoundplayerComponent } from './soundplayer/soundplayer.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';



import { OpentokService } from '../opentok.service';
import { TokboxComponent } from '../tokbox/tokbox.component';
import { PublisherComponent } from '../tokbox/publisher/publisher.component';
import { SubscriberComponent } from '../tokbox/subscriber/subscriber.component';


@NgModule({
  imports: [
    CommonModule,
    DjViewRoutingModule,
    FormsModule,
  ],
  declarations: [CommentsComponent, SoundplayerComponent, ProfileComponent, MainComponent, SearchComponent, CommentComponent, TokboxComponent, PublisherComponent, SubscriberComponent],
  providers: [OpentokService]
})
export class DjViewModule { }
