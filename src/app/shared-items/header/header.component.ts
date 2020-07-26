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
    // if(this.loggedIn){
    //   this.userData= localStorage.getItem('userInfo');
    //   console.log(typeof this.userData);
    // }
  }

}
