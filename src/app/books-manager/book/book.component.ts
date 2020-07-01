// import { BookInventory } from '../../model/book-inventory';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RootService } from '../../services/root.service';
import { UploadService } from './../../services/upload.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // books = books;
  submitted = false;
  error;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  books;
  booksForm : FormGroup;
  // newBook = new BookInventory('','','','','');
  constructor(
      private rootService : RootService,
      private formBuilder: FormBuilder,
      private uploadService : UploadService
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
      cover : [],
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
    var coverval = this.booksForm.value.cover;
    var filename = coverval.replace(/^.*[\\\/]/, '')
    console.log(filename);
    var newBookItem = {'title' : titleval, 'author' : authorval, 'category': catval, 'ISBN' : isbnval, 'blurb' : blurbval};
    this.rootService.postAPIData(newBookItem).subscribe((response)=>{
      console.log(response);
      this.getBooks();
    },(error) => {
        console.log('error is ', error)
    });
    
    const formData = new FormData();
    formData.append('file', this.booksForm.get('cover').value);
    this.uploadService.upload(formData, this.userId).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
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
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log('hethero');
      // console.log(file.name);
      this.booksForm.get('cover').setValue(file);
    }
  }
}
