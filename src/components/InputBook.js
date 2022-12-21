import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postToAPI } from './API';

const InputBook = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.querySelector('.inputTitle').value;
    const author = document.querySelector('.inputAuthor').value;

    const book = { id, title, author };
    dispatch(postToAPI(book));
  };

  return (
    <section>
      <h2 className="inputFormTitle">ADD NEW BOOK</h2>
      <form className="inputFormContainer">
        <input
          type="text"
          className="input inputTitle"
          placeholder="Book title..."
          name="title"
        />
        <input
          type="text"
          className="input inputAuthor"
          placeholder="Book author..."
          name="author"
        />
        <button
          type="submit"
          className="inputSubmit"
          onClick={handleClick}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default InputBook;
