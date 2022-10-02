import { SET_BOOKS, SET_BOOKS_LOADING, SET_BOOKS_ERROR } from '../actionTypes';

const initialState = {
  books: [],
  booksLoading: true,
  booksError: null
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_BOOKS_LOADING:
      return { ...state, booksLoading: action.payload };
    case SET_BOOKS_ERROR:
      return { ...state, booksError: action.payload };
    default:
      return state;
  }
}
