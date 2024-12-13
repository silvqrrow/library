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
  displayLibrary();
}

const libraryContainer = document.querySelector(".book__container");
const bookDialog = document.querySelector(".dialog");
const addBookButton = document.querySelector(".add-button");
const addBookForm = document.querySelector(".add-book-form");

addBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = addBookForm.title.value;
  const author = addBookForm.author.value;
  const pages = addBookForm.pages.value;
  const read = addBookForm.read.checked;
  addBookToLibrary(title, author, pages, read);
  bookDialog.close();
  addBookForm.reset();
});

addBookButton.addEventListener("click", function () {
  bookDialog.showModal();
});

function displayLibrary() {
  libraryContainer.replaceChildren();

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
