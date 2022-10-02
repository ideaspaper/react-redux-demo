import {
  SET_ADD_BOOK_TITLE,
  SET_ADD_BOOK_AUTHOR,
  SET_ADD_BOOK_IMAGE_URL,
  SET_ADD_BOOK_PRICE,
  SET_ADD_BOOK_SYNOPSIS,
  CLEAR_ADD_BOOK
} from '../actionTypes';

const initialState = {
  title: '',
  author: '',
  imageUrl: '',
  price: 0,
  synopsis: ''
};

export default function addBookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADD_BOOK_TITLE:
      return { ...state, title: action.payload };
    case SET_ADD_BOOK_AUTHOR:
      return { ...state, author: action.payload };
    case SET_ADD_BOOK_IMAGE_URL:
      return { ...state, imageUrl: action.payload };
    case SET_ADD_BOOK_PRICE:
      return { ...state, price: action.payload };
    case SET_ADD_BOOK_SYNOPSIS:
      return { ...state, synopsis: action.payload };
    case CLEAR_ADD_BOOK:
      return {
        title: '',
        author: '',
        imageUrl: '',
        price: 0,
        synopsis: ''
      };
    default:
      return state;
  }
}
