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
    const category = document.querySelector('.inputCategory').value;

    const book = {
      id, title, author, category,
    };
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
        <select
          type="text"
          className="input inputCategory"
          placeholder="Book category..."
          name="category"
        >
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Memoir">Memoir</option>
          <option value="Other">Other</option>
        </select>
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
