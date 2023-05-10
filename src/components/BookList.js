import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.book);

  return (
    <ul className="bookList">
      {books.map((book) => (
        <li key={book.id}>
          <BookItem
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
