import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PublisherComponent } from './publisher/publisher.component';

import { OpentokService } from '../../services/opentok.service';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [OpentokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
