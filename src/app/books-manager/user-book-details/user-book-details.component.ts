import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.scss']
})
export class UserBookDetailsComponent implements OnInit {
  bookDetail: any;
  readonly imageUrl = "http://localhost:5000/";
  constructor(
    private rootService : RootService,
    private activatedRoute: ActivatedRoute
  ) {
    this.bookDetail =  {
      '_id' : '',
      'title' : '',
      'blurb' : '',
      'author' : '',
      'category' : '',
      'cover' : '',
    };
   }

  ngOnInit(): void {
    var id;
    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });
    this.fetchBookdetails(id); 
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
}
