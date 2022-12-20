import React from 'react';
import { useDispatch } from 'react-redux';

const BookItem = (book) => {
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'bookstore/books/REMOVE', id });
  };

  return (
    <div>
      <h2>{title}</h2>
      <h6>{author}</h6>
      <button type="submit" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
};

export default BookItem;
