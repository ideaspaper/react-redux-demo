import { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Book from '../../components/Book';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(false);
  const [booksError, setBooksError] = useState(null);

  const fetchBooks = () => {
    return new Promise((resolve, reject) => {
      setBooksLoading(true);
      setBooksError(null);
      fetch('http://localhost:8080/books')
        .then((response) => {
          if (!response.ok) throw new Error('cannot fetch books');
          return response.json();
        })
        .then((data) => {
          setBooks(data);
          resolve();
        })
        .catch((error) => {
          setBooksError(error);
          reject(error);
        })
        .finally(() => {
          setBooksLoading(null);
        });
    });
  };

  const deleteBook = (bookId) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8080/books/${bookId}`, {
        method: 'DELETE'
      })
        .then((response) => {
          if (!response.ok) throw new Error('cannot delete book');
          return response.json();
        })
        .then((data) => {
          resolve()
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetchBooks().catch((error) => {
      console.log(error);
    });
  }, []);

  const handleOnClickDelete = (bookId) => {
    deleteBook(bookId)
      .then(() => {
        return fetchBooks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Books</h1>
      {booksLoading && <Loading />}
      {!booksLoading && booksError && <Error />}
      {!booksLoading &&
        !booksError &&
        books.map((book, index) => {
          return <Book key={index} book={book} onClickDelete={handleOnClickDelete} />;
        })}
    </>
  );
};

export default BooksPage;
