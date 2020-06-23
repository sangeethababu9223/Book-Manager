import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }
  getAPIData(){
    return this.http.get('http://localhost:3000/v1/books/')
  }
  postAPIData(){
    return this.http.post('http://localhost:3000/v1/books/', {'title' : 'Her Name in the Sky', 'author' : 'Kelly Quindlen', 'category': 'Romance, Coming out, lgbtq+', 'ISBN' : '40985kjnmn', 'blurb' : 'Hannah wants to spend her senior year of high school going to football games and Mardi Gras parties with her tight-knit group of friends.The last thing she wants is to fall in love with a girl--especially when that girl is her best friend, Baker.'})
  }
}
