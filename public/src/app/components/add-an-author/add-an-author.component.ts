import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-add-an-author',
  templateUrl: './add-an-author.component.html',
  styleUrls: ['./add-an-author.component.css']
})
export class AddAnAuthorComponent implements OnInit {
	@Input() shownAuthor: any;
	@Output() signalAdd = new EventEmitter();
	@Output() toggleEvent = new EventEmitter();
  	addedAuthor: any;
  	active: boolean;
    errors= [];

  constructor(private _httpService: HttpService) {
  	this.addedAuthor = { firstName: "", lastName: "", image: "" }
   }

  ngOnInit() {  }

  onSubmit() {
  	let observable = this._httpService.createAuthor(this.addedAuthor)
  	observable.subscribe(data => {
      if(data['ServerMessage'] == "Error"){
        this.errors = []
      }
      if(typeof(data['Error'] == String)){
        this.errors.push(data['Error'])
      }
      else{
        for(var key in ['Error']['errors']){
          this.errors.push(data['Error']['errors'][key]['message'])
        }
      }
  		this.addedAuthor = { firstName: "", lastName: "", image: "" }
  		this.signalAdd.emit();
  	})
  }

  event() {
  	this.toggleEvent.emit();
  }

  setActive(){
  	if(this.shownAuthor.active == true){
  		this.active = true;
  	}
  }
}
