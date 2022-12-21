import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromAPI } from './API';

const BookItem = (book) => {
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(deleteFromAPI(id));
  };

  return (
    <div className="bookItem">
      <div className="bookContent">
        <div className="bookInfo">
          <h4 className="bookCategory">Fiction</h4>
          <h2 className="bookTitle">{title}</h2>
          <h6 className="bookAuthor">{author}</h6>
          <div className="bookActionButtons">
            <button type="submit" className="bookActionButton">
              Comments
            </button>
            <div className="verticalDivider" />
            <button type="submit" className="bookActionButton" onClick={handleClickRemove}>
              Remove
            </button>
            <div className="verticalDivider" />
            <button type="submit" className="bookActionButton">
              Edit
            </button>
          </div>
        </div>
        <div className="progressContainer">
          <div className="circularProgressContainer">
            <div className="circularProgress" />
          </div>
          <div className="progressStat">
            <p className="percentComplete">64%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progressDivider" />
          <div className="currentChapterContainer">
            <div>
              <p className="currentChapterLabel">CURRENT CHAPTER</p>
              <p className="currentChapter">Chapter 17</p>
            </div>
            <div><button className="primaryButton" type="button">UPDATE PROGRESS</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
