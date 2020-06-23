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
    return this.http.post('http://localhost:3000/v1/books/', {'title' : 'Her Name in the Sky', 'author' : 'Kelly Quindlen', 'category': 'Romance, Coming out, lgbtq+', 'ISBN' : '40985kjnmn'})
  }
}
