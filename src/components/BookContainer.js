import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookList from './BookList';
import InputBook from './InputBook';
import { getFromAPI } from './API';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromAPI());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="inner">
        <BookList />
        <div className="horizontalDivider" />
        <InputBook />
      </div>
    </div>
  );
};

export default Books;
