import { Users } from '../../model/users';
import { Component, OnInit } from '@angular/core';
import { RootService } from '../../services/root.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUser = new Users('','','','','');
  constructor(private rootService : RootService) { }
  ngOnInit(): void {  
  }
  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.newUser);
  }
  addUsers() {
    var fnameval = this.newUser.fname;
    var lnameval = this.newUser.lname;
    var userval = this.newUser.user;
    var passwordval = this.newUser.password;
 
    var newUserItem = {'fname' : fnameval, 'lname' : lnameval, 'user': userval, 'password' : passwordval };
    this.rootService.postAPIData(newUserItem,"users").subscribe((response)=>{
      console.log(response);
    },(error) => {
        console.log('error is ', error)
    });
  }
}
