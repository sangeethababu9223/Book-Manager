import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogOutComponent } from './log-out/log-out.component';
import { OrdinaryUserHomeComponent } from './ordinary-user-home/ordinary-user-home.component';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, LogOutComponent, OrdinaryUserHomeComponent],
  imports: [
    CommonModule
  ]
})
export class NormalUserModule { }
