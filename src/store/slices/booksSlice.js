import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('books/fetch', (thunkAPI) => {
  return fetch('http://localhost:8080/books')
    .then((response) => {
      if (!response.ok) throw new Error('failed to fetch books');
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
});

const initialState = {
  books: [],
  booksLoading: true,
  booksError: null
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      return { ...state, books: payload, booksLoading: false };
    });
    builder.addCase(fetchBooks.pending, (state) => {
      return { ...state, booksError: null, booksLoading: true };
    });
    builder.addCase(fetchBooks.rejected, (state, { error }) => {
      return { ...state, booksError: error.message, booksLoading: false };
    });
  }
});

export default bookSlice.reducer;
