/* 7. Use the following array of book objects to practice the array functions for map, 
find and filter. Test each of your answers to the below tasks. 

a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.

b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.

c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.

d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.

e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date. */

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  //In this part of the code, you're wanting to find a book with a certain id.
  //Here you'd be wanting to do book.id == bookId instead of books.id == bookId
  //In this case, books is the array of books and book is the individual book you're searching
  //for the specific id.
  let book = books.find((book) => books.id == bookId);
  //We're wanting the getBookTitle function to return the book's title instead of the whole book
  //object, so here we'd want to only return book.title
  return book;
}

console.log(getBookTitle(4));

//The getOldBooks and addGenre functions are missing from this file

//getOldBooks would use filter to return all books that were written before 1950 with the filter method

//addGenre would use map to create a new array with all of the book objects in it, and all of the
//book objects would have a genre property with the value set to classic.
