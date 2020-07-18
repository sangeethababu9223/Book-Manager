import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from '../../services/root.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from './../../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      var userItem = {'username': userval, 'password' : passwordval };
      // this.rootService.postAPIData(userItem).subscribe((response)=>{
      //   console.log(response);
      //   this.router.navigate(['/books'])
      // },(error) => {
      //     console.log('error is ', error)
      // });
      this.authService.validate(userItem)
      .then((response) => {
        console.log(response);
        this.authService.setUserInfo({'user' : response['user']});
        this.router.navigate(['/books']);
        console.log('one');
      },(error) => {
        console.log('error is ', error);
        console.log('two');
    });
    }


    
  }
}
