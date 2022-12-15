import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = (props) => {
  const {
    books,
  } = props;

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
