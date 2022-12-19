// Actions
const STATUS = 'bookstore/categories/STATUS';

const initialState = [];

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// Action Creator
export const checkStatusAction = () => ({
  type: STATUS,
});

export default categoriesReducer;
