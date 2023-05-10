import axios from 'axios';
import { getBooksAction, createBookAction, removeBookAction } from '../redux/books/books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Jw892Ayr6mc3caYJtp9R';

const fillBooksArray = (data) => {
  const books = [];
  const itemNames = Object.keys(data);
  itemNames.forEach((id) => {
    const itemContent = data[id];
    const { title, author, category } = itemContent[0];
    const book = {
      id, title, author, category,
    };
    books.push(book);
  });
  return books;
};

const getFromAPI = () => async (dispatch) => {
  const sendRequest = async () => {
    await axios.get(`${url}/books`)
      .then((response) => {
        const data = response.data || null;
        const books = fillBooksArray(data);
        dispatch(getBooksAction(books));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

const postToAPI = (book) => async (dispatch) => {
  const sendRequest = async () => {
    await axios.post(`${url}/books`,
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      })
      .then(() => {
        dispatch(createBookAction(book));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

const deleteFromAPI = (id) => async (dispatch) => {
  const sendRequest = async () => {
    await axios.delete(`${url}/books/${id}`)
      .then(() => {
        dispatch(removeBookAction(id));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

export { getFromAPI, postToAPI, deleteFromAPI };
