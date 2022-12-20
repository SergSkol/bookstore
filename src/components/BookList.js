import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.book) || [];

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className="bookItem">
          <BookItem
            id={book.id}
            title={book.title}
            author={book.author}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
