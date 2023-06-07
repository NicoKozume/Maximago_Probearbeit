import { NgModule, inject } from '@angular/core';
import { CanMatchFn, Route, Router, RouterModule, Routes, UrlSegment } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginService } from './services/login.service';
import { ProfileComponent } from './profile/profile.component';

// const userLoggedIn: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
//   const isLoggedIn = inject(LoginService).IsLoggedIn;
//   //redirectToLoginPage(isLoggedIn, route);
//   return isLoggedIn;
// }

// const userLoggedOut: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
//   const isLoggedIn = inject(LoginService).IsLoggedIn;
//   //redirectToLoginPage(isLoggedIn, route);
//   return !isLoggedIn;
// }

const redirectToLoginPage = (userLoggedIn: boolean, route: Route): void => {
  const router = inject(Router)
  if(userLoggedIn && !route.path?.includes("profile"))
    router.navigate(["profile"]);
  else if(!route.path?.includes("login"))
    router.navigate(["login"]);
}

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {component: LoginScreenComponent,  path: 'login'},
  {component: ProfileComponent,  path: 'profile'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
