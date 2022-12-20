import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const InputBook = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.querySelector('.input-title').value;
    const author = document.querySelector('.input-author').value;

    const book = { id, title, author };
    dispatch({ type: 'bookstore/books/CREATE', book });
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form className="inputFormContainer">
        <input
          type="text"
          className="input-title"
          placeholder="Book title..."
          name="title"
        />
        <input
          type="text"
          className="input-author"
          placeholder="Book author..."
          name="author"
        />
        <button
          type="submit"
          className="input-submit"
          onClick={handleClick}
        >
          Add book
        </button>
      </form>
    </section>
  );
};

export default InputBook;
