import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AdminGuard } from "./auth/guards/admin.guard";
import { LoginComponent } from "./home/login/login.component";
import { LandingComponent } from "./home/landing/landing.component";


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: "posts",
    loadChildren: "../app/posts/posts.module#PostsModule",
    canActivate: [AdminGuard]
  },
  {
    path: "posts",
    loadChildren: "../app/posts/posts.module#PostsModule",
    canActivate: [AdminGuard]
  },
  {
    path: "king",
    loadChildren: "../app/king/king.module#KingModule",
    canActivate: [AdminGuard]
  },
  {
    path: "dj-view",
    loadChildren: "../app/dj-view/dj-view.module#DjViewModule",
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
