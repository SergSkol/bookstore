// Actions
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';

const initialState = [];

// Reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => (book.id !== action.id));
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
