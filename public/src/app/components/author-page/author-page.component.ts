import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
	@Input() shownAuthor: any;
	@Output() callParent = new EventEmitter();
	@Output() callEdit = new EventEmitter();

	editAnAuthor = false;

  constructor() { }

  ngOnInit() {
  	}

	myEvent(){
		this.callParent.emit()
	};

	editAuthor(){
		this.callEdit.emit()
		this.editAnAuthor = !this.editAnAuthor;
	}
}
