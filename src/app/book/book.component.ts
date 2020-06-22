import { Component, OnInit } from '@angular/core';
import {books} from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books = books;
  
  constructor() { }

  ngOnInit(): void {
  }
  share() {
    window.alert('Book Shared');
  }
  addBooks() {
    books.push({
      name: 'The priory of Orange tree',
      author: 'Samantha Shannon',
      language: 'English',
      summary: 'The House of Berethnet has ruled Inys for a thousand years. Still unwed, Queen Sabran the Ninth must conceive a daughter to protect her realm from destruction—but assassins are getting closer to her door.',
    });
  }
  removeBook(){
    window.alert('Remove book');
  }
}
