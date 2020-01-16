import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './services/http-service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Authors and Books';
	authors: any;
	shownAuthor: any;
	newAuthor: any;
	editedAuthor: any;
	book: any;

	showAnAuthor = false;
	editAnAuthor = false;
	addAnAuthor = false;

  constructor(private _httpService: HttpService)	{ 
	this.newAuthor = {firstname:"", lastname: "", image: ""}
	this.shownAuthor = ""

  }

  ngOnInit(){
  	this.editAnAuthor = false;
  	this.getAllAuthorsFromService()
  }

  getAllAuthorsFromService(){
  	let observable = this._httpService.getAllAuthors()
  		observable.subscribe(data=>{
  			this.authors = data;
  		})
  }

  showAnAuthorSwitch(){
  	if(this.editAnAuthor == false){
  	this.showAnAuthor = !this.showAnAuthor
  	this.shownAuthor = "";
  	
  		this.showAnAuthor = false;
  }
}

  showAuthor(author){
  	if(this.addAnAuthor = true){
  		this.addAnAuthor = false;
  		this.shownAuthor = author;
		this.showAnAuthor = true;
	}
  	else{
		if(author == this.shownAuthor){
			this.showAnAuthor = false;
			this.shownAuthor = "";
		}
		else{
			this.shownAuthor = author;
			this.showAnAuthor = true;
		}
	}
}

	showEditor(){
		this.editAnAuthor = !this.editAnAuthor;
	}
}

