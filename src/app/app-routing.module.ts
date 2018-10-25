import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./auth/guards/admin.guard";
import { LandingComponent } from "./home/landing/landing.component";
import { NeedAuthGuardService } from './need-auth-guard.service'
 

const routes: Routes = [
  {
    path: '',
    loadChildren: "../app/featured/featured.module#FeaturedModule",
    canActivate: [NeedAuthGuardService]
  },
  {
    path: 'login',
    component: LandingComponent,

  },
  {
    path: "featured",
    loadChildren: "../app/featured/featured.module#FeaturedModule",
    canActivate: [NeedAuthGuardService]
  },
  {
    path: "listener",
    loadChildren: "../app/listener/listener.module#ListenerModule",
    canActivate: [NeedAuthGuardService]
  },
  {
    path: "dj",
    loadChildren: "../app/dj/dj.module#DjModule",
    canActivate: [NeedAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
