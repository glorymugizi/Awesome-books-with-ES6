import { DateTime } from './modules/luxon.js';
import Books from './modules/storage.js';
import {
  form,
  showArea,
  listbooks,
  contactInfo,
  contactSection,
  newbook,
  addbooks,
  dates,
} from './modules/declarations.js';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  showArea.innerHTML = '';
  const book = new Books();
  book.dataStorage();
});

const addedBook = new Books();

// display and hide page sections
showArea.classList.add('hidden');
listbooks.addEventListener('click', () => {
  showArea.classList.remove('hidden');
  addbooks.style.display = 'none';
  contactSection.style.display = 'none';
});

contactInfo.addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  contactSection.style.display = 'flex';
  showArea.classList.add('hidden');
  addbooks.style.display = 'none';
});

newbook.addEventListener('click', () => {
  contactSection.style.display = 'none';
  showArea.classList.add('hidden');
  addbooks.style.display = 'flex';
});

dates.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

window.addEventListener('load', addedBook.dotiBooks());
