import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RootService } from '../../services/root.service';
import { CustomvalidationService } from './../../services/customvalidation.service';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-normal-user-sign-up',
  templateUrl: './normal-user-sign-up.component.html',
  styleUrls: ['./normal-user-sign-up.component.scss']
})
export class NormalUserSignUpComponent implements OnInit {
  userForm : FormGroup;
  submitted = false;  
  constructor(
    private authService : AuthService, 
    private rootService : RootService, 
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService,
    private router : Router,
    private toastr: ToastrService
  ) {
    
   }
  ngOnInit(): void {  
    this.userForm = this.formBuilder.group({
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      user : ['',[Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password : ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      cpassword : ['', [Validators.required]],
    },
    {
      validator: this.customValidator.MatchPassword('password', 'cpassword'),
    });
  }
  get f() { 
    return this.userForm.controls; 
  }

  
  addUsers() {
    this.submitted = true;
    if (this.userForm.valid) {
      var fnameval = this.userForm.value.fname;
      var lnameval = this.userForm.value.lname;
      var userval = this.userForm.value.user;
      var passwordval = this.userForm.value.password;
      var newUserItem = {'fname' : fnameval, 'lname' : lnameval, 'user': userval, 'password' : passwordval, 'type' : 'normal' };
      this.rootService.postAPIData(newUserItem,"users").subscribe((response)=>{
        console.log(response);
        this.authService.setUserInfo({'user' : response['user'], 'id' : response['id']});
        this.router.navigate(['/userHome']);
        this.toastr.success("Sign Up Succesful");
      },(error) => {
          console.log('error is ', error)
          this.toastr.error("Sign Up Failed");
      });
    }
    
  }
}
