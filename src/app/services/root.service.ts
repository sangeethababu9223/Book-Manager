import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }
  getAPIData(){
    return this.http.get('http://localhost:3000/v1/books/');
  }
  postAPIData(newItem,type="books"){
    if(type=="books"){
      return this.http.post('http://localhost:3000/v1/books/', newItem);
    }
    else if(type=="users"){
      return this.http.post('http://localhost:3000/v1/users/', newItem);
    }
  }
  postAPIUpdateData(updateItem,originalItem){
    console.log("originalItem");
    console.log(originalItem);
    var query = {
      'updated' : updateItem,
      'original' : originalItem,
    }
    return this.http.post('http://localhost:3000/v1/updateBooks/', query);
  }
  removeAPIData(book){
    return this.http.post('http://localhost:3000/v1/removeBooks/', book);
  }
  // userLogin(userItem){
  //   return this.http.post('http://localhost:3000/v1/users/', userItem);

  // }
  postAPIsingleBook(singleBook){
    return this.http.post('http://localhost:3000/v1/bookOne/', singleBook);
  }

  postRatingData(newRatingItem){
    return this.http.post('http://localhost:3000/v1/rate/', newRatingItem);
  }
  getRatingData(book){
    return this.http.post('http://localhost:3000/v1/listrate/', book);
  }
}
