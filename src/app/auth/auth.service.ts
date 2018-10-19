import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginV = new BehaviorSubject<boolean>(false)
  valid = this.loginV.asObservable();
  constructor() { }
  isValid(bool:boolean) {
    this.loginV.next(bool);
  }
  isLoggedIn() {

  }


}
