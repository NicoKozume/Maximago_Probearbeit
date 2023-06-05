import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn = false;

  constructor() { }


  public get IsLoggedIn(){
    return this.isLoggedIn;
  }
}
