import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectOrientedRenderer3 } from '@angular/core/src/render3/interfaces/renderer';


@Injectable({
  providedIn: 'root'
})
export class DjProfileService {

  constructor(private http: HttpClient) { }

  getProfileInfo(): Observable<object>{
      return this.http.get<object>('/djView')
  }
}
