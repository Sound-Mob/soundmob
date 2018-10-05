import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import {KingComponent} from './king.component';
import { CommentComponent } from "./comment/comment.component";

const routes:Routes=[
    {path:'',component: KingComponent},
    { path: 'comment', component: CommentComponent}
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class KingRoutingModule{}