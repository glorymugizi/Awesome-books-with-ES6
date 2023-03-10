const title = document.querySelector('#title');
const author = document.querySelector('#author');
const showArea = document.querySelector('#displayBooks');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  dataStorage() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const book = new Books(bookTitle, bookAuthor);
    if (localStorage.getItem('books') === null) {
      const bookStore = [];
      bookStore.push(book);
      localStorage.setItem('books', JSON.stringify(bookStore));
    } else {
      const bookStorage = localStorage.getItem('books');
      const bookArray = JSON.parse(bookStorage);
      bookArray.push(book);
      localStorage.setItem('books', JSON.stringify(bookArray));
    }

    title.value = '';
    author.value = '';
    this.dotiBooks();
  }

  dotiBooks() {
    const wrapper = document.createElement('div');
    const heading = document.createElement('h1');
    heading.innerHTML = 'All awesome books';
    heading.classList.add('heading');
    const bookStorage = localStorage.getItem('books');
    const dotion = document.createElement('div');
    dotion.innerText = this.author;
    const bookArray = JSON.parse(bookStorage);
    bookArray.forEach((element, index) => {
      const displayTitle = document.createElement('p');
      const displayAuthor = document.createElement('p');
      const delbtn = document.createElement('div');
      const container = document.createElement('div');
      const senti = document.createElement('div');
      displayTitle.innerText = `"${element.title}" by`;
      displayAuthor.innerText = element.author;
      delbtn.innerHTML = `<button class="btn outer" onclick='addedBook.removeBook(${index})'>Remove</button>`;
      delbtn.classList.add('deleteBook');
      container.classList.add('library', 'middle');
      senti.classList.add('library');
      displayAuthor.classList.add('letter');
      senti.appendChild(displayTitle);
      senti.appendChild(displayAuthor);
      container.appendChild(senti);
      container.appendChild(delbtn);
      wrapper.appendChild(container);
    });
    showArea.appendChild(heading);
    showArea.appendChild(wrapper);
  }

  removeBook(index) {
    const bookStorage = localStorage.getItem('books');
    const bookArray = JSON.parse(bookStorage);
    bookArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    showArea.innerHTML = '';
    this.dotiBooks();
  }
}
export default Books;
