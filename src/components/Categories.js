import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';
import CategoriesList from './CategoriesList';

const Categories = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(checkStatusAction(books));
  }, [dispatch]);

  return (
    <div className="container">
      <CategoriesList />
    </div>
  );
};

export default Categories;
