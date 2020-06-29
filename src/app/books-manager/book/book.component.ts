import { BookInventory } from '../../model/book-inventory';
import { Component, OnInit } from '@angular/core';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // books = books;
  books;
  newBook = new BookInventory('','','','','');
  constructor(private rootService : RootService) {
    
  }
  
  ngOnInit(): void {
    this.getBooks();
  }
  share() {
    window.alert('Book Shared');
  }
  addBooks() {
    var titleval = this.newBook.title;
    var authorval = this.newBook.author;
    var catval = this.newBook.category;
    var isbnval = this.newBook.ISBN;
    var blurbval = this.newBook.blurb;
    var newBookItem = {'title' : titleval, 'author' : authorval, 'category': catval, 'ISBN' : isbnval, 'blurb' : blurbval};
    this.rootService.postAPIData(newBookItem).subscribe((response)=>{
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
  updateBook() {
    console.log('Update Book');
  }
}
