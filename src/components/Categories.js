import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatusAction());
  };

  const status = useSelector((state) => state.category);

  return (
    <div className="container">
      <h1>{status}</h1>
      <button className="primaryButton" type="submit" onClick={handleClick}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
