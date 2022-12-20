// Actions
const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [{
  id: '1',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
},
{
  id: '2',
  title: 'Dune',
  author: 'Frank Herbert',
},
];

// Reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      return [...state, action.book];
    case REMOVE: {
      const newState = state.slice();
      return newState.filter((book) => (book.id !== action.id));
    }
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
