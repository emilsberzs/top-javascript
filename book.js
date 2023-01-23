//Create constructor function for book object 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `${title} by ${author}, ${pages} pages, ${read}.`
}

//Add function prototype to object
Book.prototype.describe = function () { console.log(this.info) };

//Create an instance of a book
const book = new Book('Bible', 'God', 1000, 'not read yet');

//Console log info of a book
book.describe()