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

    //method to add book
    addBook(book: Book)
    {
        return this.http.post(this._baseURL+"/addBook", book);
    }

    //method to get a single book
    getBookById(id: number){

        return this.http.get<Book>(this._baseURL+"/SingleBook/"+id);
    }

    //method to update book
    updateBook(book: Book){

        return this.http.put(this._baseURL+"/UpdateBook/" + book.id, book);
    }

    //method to delete book
    deleteBook(id: number){

        return this.http.delete(this._baseURL+"/DeleteBook/"+id);
    }
}
