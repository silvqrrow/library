const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const libraryContainer = document.querySelector(".book__container");
const bookDialog = document.querySelector(".dialog");
const addBookButton = document.querySelector(".add-button");

addBookButton.addEventListener("click", function () {
  bookDialog.showModal();
});

function displayLibrary() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book__card");

    /* Create elements for each part of the book */
    const titleElement = document.createElement("p");
    titleElement.textContent = `"${book.title}"`;
    titleElement.classList.add("book__card-title");
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = `By: ${book.author}`;
    authorElement.classList.add("book__card-author");
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `${book.pages}pg.`;
    pagesElement.classList.add("book__card-pages");
    bookCard.appendChild(pagesElement);

    const readElement = document.createElement("p");
    readElement.textContent = `${book.read ? "Read" : "Not Read"}`;
    readElement.classList.add("book__card-read");
    bookCard.appendChild(readElement);

    /* Add book to library container*/
    libraryContainer.appendChild(bookCard);
  });
}

// Example usage
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
displayLibrary();
