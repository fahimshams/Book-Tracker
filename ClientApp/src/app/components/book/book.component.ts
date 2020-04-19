import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Book[];

  //injecting the service to use the method created
  constructor(private service: BookService) { }

  ngOnInit() {
    //when book components is initialized we want to get all the books & response to our request
    this.service.getAllBooks().subscribe(data => {

      this.books = data;
    })
  }

}
