import { createSlice } from '@reduxjs/toolkit';

export const addBookSlice = createSlice({
  name: 'book',
  initialState: {
    title: '',
    author: '',
    imageUrl: '',
    price: 0,
    synopsis: ''
  },
  reducers: {
    setTitleAddBook: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAuthorAddBook: (state, action) => {
      return { ...state, author: action.payload };
    },
    setImageUrlAddBook: (state, action) => {
      return { ...state, imageUrl: action.payload };
    },
    setPriceAddBook: (state, action) => {
      return { ...state, price: action.payload };
    },
    setSynopsisAddBook: (state, action) => {
      return { ...state, synopsis: action.payload };
    },
    clearAddBook: () => {
      return {
        title: '',
        author: '',
        imageUrl: '',
        price: 0,
        synopsis: ''
      };
    }
  }
});

export const {
  setTitleAddBook,
  setAuthorAddBook,
  setImageUrlAddBook,
  setPriceAddBook,
  setSynopsisAddBook,
  clearAddBook
} = addBookSlice.actions;
export const addBookReducer = addBookSlice.reducer;
