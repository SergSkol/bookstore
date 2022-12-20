import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'bookstore/categories/STATUS' });
  };

  const status = useSelector((state) => state.category);

  return (
    <div className="container">
      <div>{status}</div>
      <button type="submit" onClick={handleClick}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
