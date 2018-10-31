import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { LandingComponent } from './home/landing/landing.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminGuard } from './auth/guards/admin.guard';
import { ChatService } from "./services/chat.service";
import { OpentokService } from './services/opentok.service';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService, AdminGuard, ChatService, OpentokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
