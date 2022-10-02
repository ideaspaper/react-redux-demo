import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import { addBookReducer } from './slices/bookSlice';
import booksReducer from './slices/booksSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addBook: addBookReducer,
    books: booksReducer
  }
});
