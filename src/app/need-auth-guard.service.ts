
import { Component, OnInit,Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import { AuthService } from '../app/auth/auth.service';
import { ChatService } from './services/chat.service';

@Injectable({
  providedIn: 'root'
})
export class NeedAuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private chat: ChatService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route['_routerState']['url']; 
      
      if(document.cookie) {  
        this.chat.init();
        return true
      } 
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;

    
  }
}
