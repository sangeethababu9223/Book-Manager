import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn : any;
  userData : any;
  constructor(
    private authService : AuthService,
  ) { 
      this.userData ="";
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isAuthenticated()
    if(this.loggedIn){
      var userdet = localStorage.getItem('userInfo');
      var data = JSON.parse(userdet);
      this.userData= data.user
      // console.log(data.user);
    }
  }

}
