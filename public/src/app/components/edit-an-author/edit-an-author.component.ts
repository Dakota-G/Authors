import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-edit-an-author',
  templateUrl: './edit-an-author.component.html',
  styleUrls: ['./edit-an-author.component.css']
})
export class EditAnAuthorComponent implements OnInit {
	@Input() shownAuthor: any;
	@Output() signalEdit = new EventEmitter();
	editedAuthor: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() { 
  this.editedAuthor = this.shownAuthor
   }

  onEdit(){
  	let observable = this._httpService.updateAuthor(this.shownAuthor, this.editedAuthor);
  	observable.subscribe(data => {
  		this.signalEdit.emit();
  	});
  }

  removeBook(title){
    let observable = this._httpService.removeBookFromAuthor(this.shownAuthor, title)
    observable.subscribe(data => {
        console.log("book removed!", data)

    })
  }
}
