import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubject = new BehaviorSubject<boolean>(false);
  public userLoggedIn$: Observable<boolean>;

  private loggedInUserSubject = new BehaviorSubject<string>("");
  public loggedInUser$: Observable<string>;

  private isLoggedIn = false;
  private loginsToPass = [{email: "user1@maximago.de", password: "P@ssw0rd"}, {email: "user2@maximago.de", password: "2grand4u"}]

  constructor() { 
    this.userLoggedIn$ = this.loginSubject.asObservable();
    this.loggedInUser$ = this.loggedInUserSubject.asObservable();
  }


  public login(email: string, password: string): LoginResult {
    if(this.loginsToPass.find(x => x.email == email && x.password == password)){
      this.loginSubject.next(true);
      this.loggedInUserSubject.next(email);
      localStorage.setItem("USER" , email);
      return LoginResult.Success;
    }
    return LoginResult.Not_Success;
  }

  public checkSession(){
    const loginUser = localStorage.getItem("USER");
    if(loginUser == null){
      this.isLoggedIn == false;
      this.loggedInUserSubject.next("");
      this.loginSubject.next(false);
    }
    else{
      this.isLoggedIn == true;
      this.loggedInUserSubject.next(loginUser);
      this.loginSubject.next(true);
    }
  }

  public logout(){
    localStorage.clear();
    this.checkSession();
  }
}

export enum LoginResult{
  Success,
  Not_Success
}