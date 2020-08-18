import { SharedItemsModule } from './../shared-items/shared-items.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule  }   from '@angular/forms';
import { NormalUserLoginComponent } from './normal-user-login/normal-user-login.component';
import { NormalUserSignUpComponent } from './normal-user-sign-up/normal-user-sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { NormalUserHOmeComponent } from './normal-user-home/normal-user-home.component';


@NgModule({
  declarations: [
    NormalUserLoginComponent, 
    NormalUserSignUpComponent, NormalUserHOmeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedItemsModule,
    ToastrModule.forRoot() 
  ]
})
export class NormalUserModule { }
