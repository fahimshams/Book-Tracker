using System.Collections.Generic;
using Summaries.Data;

namespace Summaries.Data
{
    //Interface of the application

    public interface IBookService
    
    {
        //Method to get all books
        List<Book> GetAllBooks();

        //Method to get a single book
        Book GetBookById(int id);

        //Method to update books
        void UpdateBook(int id, Book newBook);
        
        //Method to delete book
        void DeleteBook(int id);

        //Method to add a new book
        void AddBook(Book newBook);



    }


}