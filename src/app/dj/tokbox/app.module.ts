import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PublisherComponent } from './publisher/publisher.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { OpentokService } from '../../services/opentok.service';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OpentokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
