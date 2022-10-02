import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addBook = createAsyncThunk('book/add', (book, thunkAPI) => {
  return fetch(`http://localhost:8080/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then((response) => {
      if (!response.ok) throw new Error('failed to add book');
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
});

export const deleteBook = createAsyncThunk('book/delete', (bookId, thunkAPI) => {
  return fetch(`http://localhost:8080/books/${bookId}`, {
    method: 'DELETE'
  })
    .then((response) => {
      if (!response.ok) throw new Error('failed to delete book');
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
});

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
