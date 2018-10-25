import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {FeaturedRoutingModule  } from "./featured-routing.module";
import { FeaturedComponent } from "./featured.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, FeaturedRoutingModule],
  declarations: [FeaturedComponent, NavbarComponent]
})
export class FeaturedModule {}
