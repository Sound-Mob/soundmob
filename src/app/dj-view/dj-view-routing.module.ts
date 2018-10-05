import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { CommentComponent } from './comment/comment.component';
import { AdminGuard } from "../auth/guards/admin.guard";
const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "song-search",
    component: SearchComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "dj-comment",
    component: CommentComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DjViewRoutingModule { }
