const initialState = [];

// Actions
const STATUS = 'bookstore/categories/STATUS';

const fillCategoriesArray = (books) => {
  // const categories = [];
  // books.forEach((book) => {
  //   if (!categories.includes(book.category)) {
  //     categories.push(book.category);
  //   }
  // });

  const categories = books.reduce((acc, book) => {
    const categoryIndex = acc.findIndex((item) => item.category === book.category);
    if (categoryIndex !== -1) {
      acc[categoryIndex].count += 1;
    } else {
      acc.push({ category: book.category, count: 1 });
    }
    return acc;
  }, []);
  return categories;
};

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return fillCategoriesArray(action.books);
    default:
      return state;
  }
};

// Action Creator
export const checkStatusAction = (books) => (
  { type: STATUS, books }
);

export default categoriesReducer;
