import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RootService } from '../../services/root.service';
import { CustomvalidationService } from './../../services/customvalidation.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  userForm : FormGroup;
  submitted = false;  
  constructor(
    private rootService : RootService, 
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService,
    private router : Router
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
      var newUserItem = {'fname' : fnameval, 'lname' : lnameval, 'user': userval, 'password' : passwordval };
      this.rootService.postAPIData(newUserItem,"users").subscribe((response)=>{
        console.log(response);
        this.router.navigate(['/userHome'])
      },(error) => {
          console.log('error is ', error)
      });
    }
    
  }
  
   
}