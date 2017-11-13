import axios from 'axios';

const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
const BOOK = 'BOOK';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';

const getBooks = books => ({ type: GET_ALL_BOOKS, books });
const getBook = book => ({ type: BOOK, book });
const update = book => ({ type: UPDATE, book });
const remove = id => ({ type: REMOVE, id });

export const fetchBooks = () => dispatch =>
  axios.get('/api/books')
    .then(books => dispatch(getBooks(books.data)))
    .catch(err => console.error('Fetching books unsuccessful', err));

export const postBook = book => (dispatch) => {
  console.log('made it to dispatch');
  return dispatch(getBook(book));
};


export const updateBook = (id, book) => (dispatch) => {
  axios.put(`/api/books/${id}`, book)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating book: ${book} unsuccessful`, err));
};

export const deleteBook = id => (dispatch) => {
  dispatch(remove(id));
  axios.delete(`/api/books/${id}`)
    .catch(err => console.error(`Removing book: ${id} unsuccessful`, err));
};

export default function booksReducer(books = [], action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return action.books;
    case BOOK:
      console.log('Made it to reducers');
      return [action.book, ...books];
    case REMOVE:
      return books.filter(book => book.id !== action.id);
    case UPDATE:
      return books.map(book => (
        action.book.id === book.id ? action.book : book
      ));
    default:
      return books;
  }
}
