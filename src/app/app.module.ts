import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DJViewModule } from './dj-view/dj-view.module';
import { UserViewModule } from './user-view/user-view.module';
import { ProfileViewModule } from './profile-view/profile-view.module';
import { AddSongsViewModule } from './add-songs-view/add-songs-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DJViewModule,
    UserViewModule,
    ProfileViewModule,
    AddSongsViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
