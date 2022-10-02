import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import { addBookReducer } from './slices/bookSlice';
import { apiSlice } from './slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addBook: addBookReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

setupListeners(store.dispatch);
