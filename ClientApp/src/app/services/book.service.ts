import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

    //base URL
    _baseURL: string = "api/Books";

    //inject the http client
    constructor(private http: HttpClient) { }

    //method to get books

    getAllBooks()
    {
        return this.http.get<Book[]>(this._baseURL+"/GetBooks");
    }

    addBook(book: Book)
    {
        return this.http.post(this._baseURL+"/addBook", book);
    }
}
