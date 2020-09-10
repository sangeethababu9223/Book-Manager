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
      this.fetchAverageRating();
      console.log("After Update");
      console.log(this.books);
    },(error) => {
        console.log('error is ', error)
    });
  }
  revieBook(book) {
    console.log(book);
  }
  fetchAverageRating(){
    console.log('Before avergae rating'); 
    // console.log(this.books); 
    var ratingAvg;
    for(let book of this.books){
      console.log(book._id);
      var bookrating = {'bookid' : book._id};
      this.rootService.getRatingData(bookrating).subscribe((response)=>{
        ratingAvg = response;
        if(ratingAvg.avgRating != ""){
          book.avRating = (ratingAvg.avgRating[0].pop ? ratingAvg.avgRating[0].pop : 0);
        }
      },(error) => {
          console.log('error is ', error)
      });
    }
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // this.totalstar = $event.newValue;
    console.log('hre');
    console.log(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
