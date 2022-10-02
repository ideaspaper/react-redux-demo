import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../store/slices/booksSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Book from '../../components/Book';

const BooksPage = () => {
  const { books, booksLoading, booksError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <h1>Books</h1>
      {booksLoading && <Loading />}
      {!booksLoading && booksError && <Error />}
      {!booksLoading &&
        !booksError &&
        books.map((book, index) => {
          return <Book key={index} book={book} />;
        })}
    </>
  );
};

export default BooksPage;
