import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RootService } from '../../services/root.service';
import { StarRatingComponent } from 'ng-starrating';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.scss']
})
export class UserBookDetailsComponent implements OnInit {
  bookDetail: any;
  loggedIn : any;
  userId : any;
  totalstar = 5;
  readonly imageUrl = "http://localhost:5000/";
  constructor(
    private rootService : RootService,
    private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.bookDetail =  {
      '_id' : '',
      'title' : '',
      'blurb' : '',
      'author' : '',
      'category' : '',
      'cover' : '',
    };
    this.userId ="";
   }

  ngOnInit(): void {
    var id;
    this.loggedIn = this.authService.isAuthenticated();
    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });
    this.fetchBookdetails(id); 
    if(this.loggedIn){
      var userdet = localStorage.getItem('userInfo');
      var data = JSON.parse(userdet);
      this.userId= data.id;
    }
  }
  fetchBookdetails(id){
    console.log(id);
    var booksingle = {'_id':id};
    this.rootService.postAPIsingleBook(booksingle).subscribe((response)=>{
      this.bookDetail = response;
      console.log(this.bookDetail)
    },(error) => {
      console.log('erred')
    });
    // console.log(this.bookDetail);
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // console.log(this.bookDetail._id);
    // console.log(this.userId);
    // console.log(`${$event.newValue}`);
    var newRatingItem = {'bookid' : this.bookDetail._id, 'userid' : this.userId, 'value': $event.newValue, 'oldValue': $event.oldValue};
    this.rootService.postRatingData(newRatingItem).subscribe((response)=>{
      console.log(response);
      this.toastr.success("Rating Succesful");
    },(error) => {
        console.log('error is ', error)
        this.toastr.error("Rating Failed");
    });
  }
}
