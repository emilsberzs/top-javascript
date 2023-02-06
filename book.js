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

//Create four instances of books
let book1 = new Book('The Linux Command Line', 'William Shotts', 470, 'not read')
let book2 = new Book('Python Crash Course', 'Eric Matthes', 506, 'read')
let book3 = new Book('Think Like a Programmer', 'V. Anthon Spraul', 233, 'not read')
let book4 = new Book('Bible', 'God', 1000, 'not read');


//Add all 4 books to my_library
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)


//Initialize container for cards
let container = document.querySelector(".container")



//Add all books from my_library to card div
my_library.forEach(element => {
    //Initialize new div
    let card_div = document.createElement("div")
    //Add class to card_div
    card_div.classList.add("card")
    //Populate card with book.info
    card_div.innerHTML = element.info;
    //Add toggle button for read/not read.
    card_div.innerHTML += '<button class="toggle">Read</button>'
    //Append new div to container
    container.appendChild(card_div)
});

//Function to switch read/not read
function toggle_read(book) {
    if (book.read == 'not read') {
        book.read = 'read'
        console.log(book1.info, book1.read)

    } else if (book.read == 'read') {
        book.read = 'not read'
        console.log(book.info, book.read)

    }
}

//Initialize first button
let button = document.querySelector('.toggle')
button.addEventListener('click', (event) => toggle_read(book1));
