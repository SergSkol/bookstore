import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    book: { id, title, author },
  } = props;

  return (
    <li className="bookItem" key={id}>
      <span>{title}</span>
      <span>{author}</span>
      <button type="submit">
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
