import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BooksManagerModule { }
