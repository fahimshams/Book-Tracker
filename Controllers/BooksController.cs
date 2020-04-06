using Microsoft.AspNetCore.Mvc;
using Summaries.Data;

namespace Summaries.Controllers
{
    [Route("api/[controller]")]
    public class BooksController:Controller
    {
        private IBookService _service;
        public BooksController(IBookService service)
        {
            _service = service;
        }

        //Create/Add new Book
        [HttpPost("AddBook")]

        public IActionResult AddBook([FromBody]Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }

        //Get allBooks

        [HttpGet("[action]")]

        public IActionResult GetBooks()
        {
            var allBooks = _service.GetAllBooks();
            
            return Ok(allBooks);
        }

        
    }
}