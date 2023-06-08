import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginResult, LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent{
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(public loginService: LoginService, private router: Router) {
  }

  public tryLogin(){
    if(this.loginForm.valid){
      const result = this.loginService.login(this.loginForm.value.email!, this.loginForm.value.password!)
      if(result == LoginResult.Success){
        this.loginForm.controls.password.setErrors({ loginFailure: false})
        this.router.navigate(["profile"]);
      }
      else{
        this.loginForm.controls.password.setErrors({loginFailure: true});
      }
    }
  }
}
