// import { BookInventory } from '../../model/book-inventory';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RootService } from '../../services/root.service';
import { UploadService } from './../../services/upload.service';
// const URL = 'http://localhost:8080/api/upload';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // books = books;
  readonly imageUrl = "http://localhost:5000/";
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
    var blurbval = this.booksForm.value.blurb;
    var coverval = this.booksForm.value.cover;
    var filename = coverval.replace(/^.*[\\\/]/, '');
    var fileExt = filename.split('.').pop();
    var time =new Date();
    var vartime = time.getTime();
    var covername = (titleval.split(' ').join('_'))+'_'+(authorval.split(' ').join('_'))+vartime+"."+fileExt;
    var newBookItem = {'title' : titleval, 'author' : authorval, 'category': catval, 'blurb' : blurbval, 'cover' : covername};
    this.rootService.postAPIData(newBookItem).subscribe((response)=>{
      console.log(response);
      this.getBooks();
    },(error) => {
        console.log('error is ', error)
    });
    
    const formData = new FormData();
    formData.append('file', this.booksForm.get('cover').value , covername );
    this.uploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );

  }
  getBooks(){
    this.rootService.getAPIData().subscribe((response)=>{
      console.log(response);
      this.books = response['booklists'];
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
      this.booksForm.get('cover').setValue(file);
    }
  }
}
