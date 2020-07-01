// import { BookInventory } from '../../model/book-inventory';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // books = books;
  submitted = false;
  books;
  booksForm : FormGroup;
  // newBook = new BookInventory('','','','','');
  constructor(
      private rootService : RootService,
      private formBuilder: FormBuilder,
    ) {
    
  }
  
  ngOnInit(): void {
    this.getBooks();
    this.booksForm = this.formBuilder.group({
      title : ['',Validators.required],
      author : ['',Validators.required],
      category : [''],
      ISBN : [''],
      blurb : [''],
    });
  }
  share() {
    window.alert('Book Shared');
  }
  get f() { 
    return this.booksForm.controls; 
  }
  addBooks() {
    this.submitted = true;
    var titleval = this.booksForm.value.title;;
    var authorval = this.booksForm.value.author;
    var catval = this.booksForm.value.category;
    var isbnval = this.booksForm.value.ISBN;
    var blurbval = this.booksForm.value.blurb;
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
