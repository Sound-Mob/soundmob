import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return true;
  }

  get isSuperAdmin() {
    return true;
  }

}
