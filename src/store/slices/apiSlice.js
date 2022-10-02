import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080'
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => {
    return {
      getBooks: builder.query({
        query: () => {
          return {
            url: '/books',
            method: 'GET'
          };
        },
        providesTags: ['Books']
      }),
      addBook: builder.mutation({
        query: (book) => {
          return {
            url: '/books',
            method: 'POST',
            body: book
          };
        },
        invalidatesTags: (result, error, arg) => {
          return !error ? ['Books'] : [];
        }
      }),
      deleteBook: builder.mutation({
        query: (bookId) => {
          return {
            url: `/books/${bookId}`,
            method: 'DELETE'
          };
        },
        invalidatesTags: (result, error, arg) => {
          return !error ? ['Books'] : [];
        }
      })
    };
  }
});

export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation } = apiSlice;
