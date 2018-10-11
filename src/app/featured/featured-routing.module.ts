import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  FeaturedComponent} from './featured.component'


const routes: Routes = [
    { path: "", component: FeaturedComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class FeaturedRoutingModule { }