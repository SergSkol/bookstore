import React from 'react';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => (
  <div className="container">
    <div className="inner">
      <BookList />
      <InputBook />
    </div>
  </div>
);

export default Books;
