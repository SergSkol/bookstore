const initialState = [];

// Actions
const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';
const GET = 'bookstore/books/GET';

// Reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      return [...state, action.book];
    case REMOVE: {
      const newState = state.slice();
      return newState.filter((book) => (book.id !== action.id));
    }
    case GET:
      return action.books;
    default: return state;
  }
}

// Action Creators
export function createBookAction(book) {
  return { type: CREATE, book };
}

export function removeBookAction(id) {
  return { type: REMOVE, id };
}

export function getBooksAction(books) {
  return { type: GET, books };
}
