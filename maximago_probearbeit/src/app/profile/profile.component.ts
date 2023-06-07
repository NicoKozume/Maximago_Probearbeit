import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserInformation, UserService } from '../services/user.service';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userInformation: Observable<UserInformation>

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router) {
    this.userInformation = new Observable();
  }
  ngOnInit(): void {
    this.loginService.checkSession();
    this.userInformation = this.loginService.loggedInUser$.pipe(
      map(email => this.userService.getUserInformation(email))
      )
  }

  logout(){
    this.loginService.logout()
    this.router.navigate(['login'])
  }
}
