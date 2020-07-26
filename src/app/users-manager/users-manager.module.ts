import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule  }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LogoutComponent } from './logout/logout.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    UserHomeComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot() 
  ]
})
export class UsersManagerModule {

}
