import { BookComponent } from './books-manager/book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users-manager/login/login.component';
import { SignUpComponent } from './users-manager/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
