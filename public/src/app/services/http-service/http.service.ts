import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

	getAllAuthors(){
		return this._http.get('/authors');
	}
	getOneAuthor(author){
		return this._http.get(`authors/${author._id}`);
	}
	createAuthor(newAuthor){
		return this._http.post('/authors', newAuthor);
	}
	updateAuthor(author, editedAuthor){
		return this._http.put(`/authors/${author._id}`, editedAuthor);
	}
	deleteAuthor(author){
		return this._http.delete(`/authors/${author._id}`);
	}
	addBookToAuthor(author, book){
		return this._http.put(`/authors/${author._id}/addBook`, book);
	}
	removeBookFromAuthor(author, title){
		return this._http.put(`/authors/${author._id}/removeBook`, title);
	}
}
