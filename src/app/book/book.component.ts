import { Component, OnInit } from '@angular/core';
// import {books} from '../books';
import { RootService } from './root.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // books = books;
  books;
  constructor(private rootService : RootService) {
    
  }

  ngOnInit(): void {
    this.getBooks();
  }
  share() {
    window.alert('Book Shared');
  }
  addBooks() {
    this.rootService.postAPIData().subscribe((response)=>{
      console.log(response);
      this.getBooks();
    },(error) => {
        console.log('error is ', error)
    });
  }
  getBooks(){
    this.rootService.getAPIData().subscribe((response)=>{
      console.log(response);
      this.books = response['booklists'];
      console.log("Books Here..!!");
      console.log(this.books);
    },(error) => {
        console.log('error is ', error)
    });
  }
  removeBook(){
    window.alert('Remove book');
  }
}
