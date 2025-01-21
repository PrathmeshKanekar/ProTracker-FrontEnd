import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private api:ApiService) { }

  setToken(token:string){
    localStorage.setItem("token", token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLoggedIn(){
    if(localStorage.getItem("token") != null)
      return true;
    else
      return false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }


  login(data: any): Observable<any> {
    return this.api.get("login/" + data.username + '/' + data.password);
  }



}
