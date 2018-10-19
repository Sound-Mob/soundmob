import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginV = new BehaviorSubject<boolean>(false)
  valid = this.loginV.asObservable();
  constructor() { }
<<<<<<< HEAD
  isValid(bool:boolean) {
    this.loginV.next(bool);
=======

  isLoggedIn() {
    return true;
>>>>>>> ca97bcabc2ed89e9c170c640f60011f367eec347
  }
  isLoggedIn() {

  }


}
