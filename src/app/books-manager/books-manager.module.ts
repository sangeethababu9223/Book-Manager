import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksManagerModule { }
