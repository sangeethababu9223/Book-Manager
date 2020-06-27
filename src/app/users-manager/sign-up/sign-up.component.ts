import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RootService } from '../../services/root.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  userFormGroup: FormGroup = new FormGroup({
    fname : new FormControl(''),
    lname : new FormControl(''),
    user : new FormControl(''),
    password : new FormControl(''),
    cpassword : new FormControl(''),
  });
  
  // newUser = new Users('','','','','');
  constructor(private rootService : RootService) {
    
   }
  ngOnInit(): void {  
  }
  
  
  addUsers() {
    this.userFormGroup.patchValue({

    })
    console.warn(this.userFormGroup.value);
    // var fnameval = this.newUser.fname;
    // var lnameval = this.newUser.lname;
    // var userval = this.newUser.user;
    // var passwordval = this.newUser.password;
    // var fnameval = "kola";
    // var lnameval = "kola";
    // var userval = "kola01";
    // var passwordval = "kola019384ghjxQ";
 
    // var newUserItem = {'fname' : fnameval, 'lname' : lnameval, 'user': userval, 'password' : passwordval };
    // this.rootService.postAPIData(newUserItem,"users").subscribe((response)=>{
    //   console.log(response);
    // },(error) => {
    //     console.log('error is ', error)
    // });
  }
  
   
}
