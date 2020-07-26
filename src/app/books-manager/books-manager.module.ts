import { SharedItemsModule } from './../shared-items/shared-items.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BookDetailsComponent } from './book-details/book-details.component';
@NgModule({
  declarations: [
    BookComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedItemsModule,
    ToastrModule.forRoot() 
  ]
})
export class BooksManagerModule { }
