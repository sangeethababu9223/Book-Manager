import { Users } from '../../model/users';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { RootService } from '../../services/root.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  newUser = new Users('','','','','');
  constructor(private rootService : RootService, private fb: FormBuilder) {
    this.form = fb.group({
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'cpassword')
    })
   }
  ngOnInit(): void {  
  }
  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.newUser['fname']);
  }
  addUsers() {
    var fnameval = this.newUser.fname;
    var lnameval = this.newUser.lname;
    var userval = this.newUser.user;
    var passwordval = this.newUser.password;
    // var fnameval = "kola";
    // var lnameval = "kola";
    // var userval = "kola01";
    // var passwordval = "kola019384ghjxQ";
 
    var newUserItem = {'fname' : fnameval, 'lname' : lnameval, 'user': userval, 'password' : passwordval };
    this.rootService.postAPIData(newUserItem,"users").subscribe((response)=>{
      console.log(response);
    },(error) => {
        console.log('error is ', error)
    });
  }
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
   
}
