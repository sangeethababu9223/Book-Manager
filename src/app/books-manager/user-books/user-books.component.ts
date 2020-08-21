import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RootService } from '../../services/root.service';
import { UploadService } from './../../services/upload.service';
import { ToastrService } from 'ngx-toastr';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class UserBooksComponent implements OnInit {
  readonly imageUrl = "http://localhost:5000/";
  submitted = false;
  updating = false ;
  enableaddBooks = false;
  error;
  totalstar = 5;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  books;
  loggedIn;
  booksForm : FormGroup;
  booksOrgForm : FormGroup;
  // newBook = new BookInventory('','','','','');
  constructor(
      private rootService : RootService,
      private authService : AuthService,
      private formBuilder: FormBuilder,
      private uploadService : UploadService,
      private toastr: ToastrService
    ) {
    
  }
  
  ngOnInit(): void {
    this.getBooks();
    this.loggedIn = this.authService.isAuthenticated();
  }
  share() {
    window.alert('Book Shared');
  }
  get f() { 
    return this.booksForm.controls; 
  }
  getBooks(){
    this.rootService.getAPIData().subscribe((response)=>{
      console.log(response);
      this.books = response['booklists'];
    },(error) => {
        console.log('error is ', error)
    });
  }
  revieBook(book) {
    console.log(book);
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // this.totalstar = $event.newValue;
    // console.log(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
