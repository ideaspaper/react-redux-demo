import { useGetBooksQuery } from '../../store/slices/apiSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Book from '../../components/Book';

const BooksPage = () => {
  const { data: books, error: booksError, isLoading: booksLoading } = useGetBooksQuery();

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
