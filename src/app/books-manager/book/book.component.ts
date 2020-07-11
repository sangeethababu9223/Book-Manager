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
  readonly imageUrl = "http://localhost:5000/";
  submitted = false;
  updating = false ;
  error;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  books;
  booksForm : FormGroup;
  booksOrgForm : FormGroup;
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
    this.booksOrgForm = this.formBuilder.group({
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
    console.log('top');
    this.submitted = true;
    var titleval = this.booksForm.value.title;;
    var authorval = this.booksForm.value.author;
    var catval = this.booksForm.value.category;
    var blurbval = this.booksForm.value.blurb;
    var coverval = this.booksForm.value.cover;
    console.log('here');
    if(coverval!=""){
      var filename = coverval.replace(/^.*[\\\/]/, '');
      var fileExt = filename.split('.').pop();
      var time =new Date();
      var vartime = time.getTime();
      var covername = (titleval.split(' ').join('_'))+'_'+(authorval.split(' ').join('_'))+vartime+"."+fileExt;
      const formData = new FormData();
      formData.append('file', this.booksForm.get('cover').value , covername );
      this.uploadService.upload(formData).subscribe(
        (res) => this.uploadResponse = res,
        (err) => this.error = err
      );   
      var newBookItem = {'title' : titleval, 'author' : authorval, 'category': catval, 'blurb' : blurbval, 'cover' : covername};
    }
    else {
      var newBookItem = {'title' : titleval, 'author' : authorval, 'category': catval, 'blurb' : blurbval, 'cover' : ''};
    }

    console.log("update ior not : " + this.updating);

    if(this.updating){
      console.log("Original");
      console.log(this.booksOrgForm);
      var orgcoverval = this.booksOrgForm.value.cover;
      var queryUpdate = {'cover': orgcoverval};
      this.rootService.postAPIUpdateData(newBookItem, queryUpdate).subscribe((response)=>{
        console.log(response);
        this.getBooks();
        this.updating = false;
      },(error) => {
          console.log('error is ', error)
      });
    }else {
      this.rootService.postAPIData(newBookItem).subscribe((response)=>{
        console.log(response);
        this.getBooks();
      },(error) => {
          console.log('error is ', error)
      });
    }
    
  }
  getBooks(){
    this.rootService.getAPIData().subscribe((response)=>{
      console.log(response);
      this.books = response['booklists'];
    },(error) => {
        console.log('error is ', error)
    });
  }
  removeBook(book){
    // console.log('Remove book');
    // console.log(cover);
    var bookVal = book
    this.rootService.removeAPIData(bookVal).subscribe((response)=>{
      console.log(response);
      this.getBooks();
    },(error) => {
        console.log('error is ', error)
    });
  }
  updateBook(book) {
    this.updating = true; 
    window.scroll(0,0);
    this.booksForm.get('title').setValue(book.title);
    this.booksForm.get('author').setValue(book.author);
    this.booksForm.get('category').setValue(book.category);
    this.booksForm.get('blurb').setValue(book.blurb);
    this.booksForm.get('cover').setValue(book.cover);

    this.booksOrgForm.get('title').setValue(book.title);
    this.booksOrgForm.get('author').setValue(book.author);
    this.booksOrgForm.get('category').setValue(book.category);
    this.booksOrgForm.get('blurb').setValue(book.blurb);
    this.booksOrgForm.get('cover').setValue(book.cover);
    
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.booksForm.get('cover').setValue(file);
    }
  }
}
