import React from 'react';

const InputBook = () => (
  <form className="inputFormContainer">
    <input
      type="text"
      className="input-text"
      placeholder="Book title..."
      name="title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Book author..."
      name="author"
    />
    <button type="submit" className="input-submit">
      Add book
    </button>
  </form>
);

export default InputBook;
