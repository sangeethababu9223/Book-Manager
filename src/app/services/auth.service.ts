import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(userItem) {
    return this.http.post('http://localhost:3000/v1/authenticate', userItem).toPromise()
  }
  public logout() {
    console.log("out");
    let userData = localStorage.getItem('userInfo');
    console.log(userData);
    return this.http.get('http://localhost:3000/v1/logout').toPromise()
  }
}