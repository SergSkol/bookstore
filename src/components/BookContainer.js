import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import InputBook from './InputBook';

const books = [
  {
    id: 1,
    title: 'Title 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Title 2',
    author: 'Author 1',
  },
  {
    id: 3,
    title: 'Title 3',
    author: 'Author 1',
  },
];

const BookContainer = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <div className="container">
          <div className="inner">
            <BookList
              books={books}
            />
            <InputBook />
          </div>
        </div>
      )}
    />
  </Routes>
);

export default BookContainer;
