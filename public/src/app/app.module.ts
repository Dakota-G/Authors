import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/http-service/http.service";
import { FormsModule } from '@angular/forms';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { AddAnAuthorComponent } from './components/add-an-author/add-an-author.component';
import { EditAnAuthorComponent } from './components/edit-an-author/edit-an-author.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorPageComponent,
    AddAnAuthorComponent,
    EditAnAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
