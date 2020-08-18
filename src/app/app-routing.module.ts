import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { UserHomeComponent } from './users-manager/user-home/user-home.component';
import { BookComponent } from './books-manager/book/book.component';
import { BookDetailsComponent } from './books-manager/book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users-manager/login/login.component';
import { SignUpComponent } from './users-manager/sign-up/sign-up.component';
import { LogoutComponent } from './users-manager/logout/logout.component';
import { NormalUserLoginComponent } from './normal-user/normal-user-login/normal-user-login.component';
import { NormalUserSignUpComponent } from './normal-user/normal-user-sign-up/normal-user-sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bookdetails/:id', component: BookDetailsComponent},
  { path: 'books', component: BookComponent},
  { path: 'adminLogin', component: LoginComponent },
  { path: 'adminSignup', component: SignUpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'userHome', component: UserHomeComponent,canActivate : [AuthGuard] },
  { path: 'login', component: NormalUserLoginComponent },
  { path: 'signup', component: NormalUserSignUpComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
