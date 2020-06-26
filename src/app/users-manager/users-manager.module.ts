import { MatchPasswordDirective } from './../directives/match-password.directive';
import { PasswordPatternDirective } from './../directives/password-pattern.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule  }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    PasswordPatternDirective,
    MatchPasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersManagerModule {

}
