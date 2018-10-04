import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./home/landing/landing.component";
import { LoginComponent } from "./home/login/login.component";
import { SignInComponent } from "./home/signin/signin.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "posts",
    loadChildren: "../app/posts/posts.module#PostsModule"
  },
  {
    path: "king",
    loadChildren: "../app/king/king.module#KingModule"
  },
  {
    path: "dj-view",
    loadChildren: "../app/dj-view/dj-view.module#DjViewModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
