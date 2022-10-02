import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  SET_BOOKS,
  SET_BOOKS_ERROR,
  SET_BOOKS_LOADING,
  SET_ADD_BOOK_TITLE,
  SET_ADD_BOOK_AUTHOR,
  SET_ADD_BOOK_IMAGE_URL,
  SET_ADD_BOOK_SYNOPSIS,
  SET_ADD_BOOK_PRICE,
  CLEAR_ADD_BOOK
} from '../actionTypes';

export const incrementCounter = (payload) => {
  return { type: COUNTER_INCREMENT, payload };
};

export const decrementCounter = (payload) => {
  return { type: COUNTER_DECREMENT, payload };
};

export const setBooks = (payload) => {
  return { type: SET_BOOKS, payload };
};

export const setBooksLoading = (payload) => {
  return { type: SET_BOOKS_LOADING, payload };
};

export const setBooksError = (payload) => {
  return { type: SET_BOOKS_ERROR, payload };
};

export const fetchBooks = () => {
  return (dispatch, store) => {
    dispatch(setBooksLoading(true));
    dispatch(setBooksError(null));
    fetch('http://localhost:8080/books')
      .then((response) => {
        if (!response.ok) throw new Error('cannot fetch books');
        return response.json();
      })
      .then((data) => {
        dispatch(setBooks(data));
      })
      .catch((error) => {
        dispatch(setBooksError(error.message));
      })
      .finally(() => {
        dispatch(setBooksLoading(false));
      });
  };
};

export const deleteBook = (bookId) => {
  return (dispatch, store) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8080/books/${bookId}`, {
        method: 'DELETE'
      })
        .then((response) => {
          if (!response.ok) throw new Error('cannot delete book');
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const setAddBookTitle = (payload) => {
  return { type: SET_ADD_BOOK_TITLE, payload };
};

export const setAddBookAuthor = (payload) => {
  return { type: SET_ADD_BOOK_AUTHOR, payload };
};

export const setAddBookImageUrl = (payload) => {
  return { type: SET_ADD_BOOK_IMAGE_URL, payload };
};

export const setAddBookSynopsis = (payload) => {
  return { type: SET_ADD_BOOK_SYNOPSIS, payload };
};

export const setAddBookPrice = (payload) => {
  return { type: SET_ADD_BOOK_PRICE, payload };
};

export const clearAddBook = () => {
  return { type: CLEAR_ADD_BOOK };
};

export const addBook = (book) => {
  return (dispatch, store) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      })
        .then((response) => {
          if (!response.ok) throw new Error('cannot add book');
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};
