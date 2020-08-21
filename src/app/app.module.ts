import { SharedItemsModule } from './shared-items/shared-items.module';
import { UsersManagerModule } from './users-manager/users-manager.module';
import { BooksManagerModule } from './books-manager/books-manager.module';
import { NormalUserModule } from './normal-user/normal-user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RatingModule } from 'ng-starrating';
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
    UsersManagerModule,
    NormalUserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedItemsModule,
    RatingModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
