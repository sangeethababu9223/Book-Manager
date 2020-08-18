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
import { UserBookDetailsComponent } from './books-manager/user-book-details/user-book-details.component';
import { UserBooksComponent } from './books-manager/user-books/user-books.component';
import { NormalUserHOmeComponent } from './normal-user/normal-user-home/normal-user-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'adminBookdetails/:id', component: BookDetailsComponent},
  { path: 'adminBooks', component: BookComponent},
  { path: 'adminLogin', component: LoginComponent },
  { path: 'adminSignup', component: SignUpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'adminHome', component: UserHomeComponent,canActivate : [AuthGuard] },
  { path: 'userHome', component: NormalUserHOmeComponent,canActivate : [AuthGuard] },
  { path: 'login', component: NormalUserLoginComponent },
  { path: 'signup', component: NormalUserSignUpComponent },
  { path: 'books', component:  UserBooksComponent},
  { path: 'bookdetails/:id', component:  UserBookDetailsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
