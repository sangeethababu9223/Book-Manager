import { UsersManagerModule } from './users-manager/users-manager.module';
import { BooksManagerModule } from './books-manager/books-manager.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BooksManagerModule,
    UsersManagerModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
