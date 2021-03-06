import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Book[];

  //injecting the service to use the method created
  constructor(private service: BookService, private router: Router) { }

  ngOnInit() {
    //when book components is initialized we want to get all the books & response to our request
    this.service.getAllBooks().subscribe(data => {

      this.books = data;
    })
  }

  showBook(id: number){

    this.router.navigate(["/show-book/"+id]);

  }

  updateBook(id: number){

    this.router.navigate(["/update-book/"+id]);

  }

  deleteBook(id: number){

    this.router.navigate(["/delete-book/"+id]);

  }

}
