//Create empty array to store books
let my_library = [];

//Create constructor function for book object 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `${title} by ${author}, ${pages} pages, ${read}.`
}

//Create function to add book to library
function addBookToLibrary(book) {
    my_library.push(book)
}



//Add function prototype to object
Book.prototype.describe = function () { console.log(this.info) };

//Create an instance of a book
const book = new Book('Bible', 'God', 1000, 'not read');

//Create more instances of books
let book1 = new Book('The Linux Command Line', 'William Shotts', 470, 'not read')
let book2 = new Book('Python Crash Course', 'Eric Matthes', 506, 'read')
let book3 = new Book('Think Like a Programmer', 'V. Anthon Spraul', 233, 'not read')


//Add all 4 books to my_library
addBookToLibrary(book)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
//Console log info of a book
book.describe()

//Initialize container for cards
let container = document.querySelector(".container")

//Initialize new div
let card_div = document.createElement("div")

//Add class to card_div
card_div.classList.add("card")

//Add all books from my_library to card div
my_library.forEach(element => {
    card_div.innerHTML += element.info;

});


//Append new div to container
container.appendChild(card_div)