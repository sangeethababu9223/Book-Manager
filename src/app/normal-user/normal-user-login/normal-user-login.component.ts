import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from '../../services/root.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from './../../services/customvalidation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-normal-user-login',
  templateUrl: './normal-user-login.component.html',
  styleUrls: ['./normal-user-login.component.scss']
})
export class NormalUserLoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false; 
  userEmail : String;
  userPassword : String;

  constructor(
    private rootService : RootService, 
    private authService : AuthService, 
    private router : Router,
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user : ['',[Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password : ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    });
  }
  get f() { 
    return this.loginForm.controls; 
  }
  login(){
    console.log('onetwo');
    this.submitted = true;
    if (this.loginForm.valid) {
      var userval = this.loginForm.value.user;
      var passwordval = this.loginForm.value.password;
      var userItem = {'username': userval, 'password' : passwordval, 'type' : 'normal'  };
      // this.rootService.postAPIData(userItem).subscribe((response)=>{
      //   console.log(response);
      //   this.router.navigate(['/books'])
      // },(error) => {
      //     console.log('error is ', error)
      // });
      this.authService.validate(userItem)
      .then((response) => {
        console.log(response);
        this.authService.setUserInfo({'user' : response['user'], 'id' : response['id']});
        this.router.navigate(['/userHome']);
        this.toastr.success("Login Succesful");
      },(error) => {
        console.log('error is ', error);
        this.toastr.error("Login Failed!");
    });
    }


    
  }
}
