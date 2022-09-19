const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const EDIT_BOOK = 'bookStore/books/EDIT_BOOK';

export const initialState = {
  books: [],
};

export default function booksReducer(state = initialState.books, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case EDIT_BOOK:
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });
    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}

export function editBook(id, book) {
  return {
    type: EDIT_BOOK,
    id,
    book,
  };
}
