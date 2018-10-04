import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AdminGuard } from "./auth/guards/admin.guard";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    
  },
  {
    path: "posts",
    loadChildren: "../app/posts/posts.module#PostsModule",
    canActivate: [AuthGuard]
  },
  {
    path: "king",
    loadChildren: "../app/king/king.module#KingModule",
    canActivate: [AuthGuard]
  },
  {
    path: "dj-view",
    loadChildren: "../app/dj-view/dj-view.module#DjViewModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
