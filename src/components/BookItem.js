import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromAPI } from './API';

const BookItem = (book) => {
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(deleteFromAPI(id));
  };

  return (
    <div className="bookItem">
      <h2 className="bookTitle">{title}</h2>
      <h6 className="bookAuthor">{author}</h6>
      <div className="bookActionButtons">
        <button type="submit" className="bookActionButton" onClick={handleClickRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookItem;
