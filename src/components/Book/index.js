import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../store/slices/booksSlice';
import { deleteBook } from '../../store/slices/bookSlice';

const BookComponent = ({ book }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteBook(book.id))
      .unwrap()
      .then(() => {
        dispatch(fetchBooks());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.image_url} alt={book.title} height="300" />
      <p>ID: {book.id}</p>
      <p>Author: {book.author}</p>
      <p>Synopsis: {book.synopsis}</p>
      <button onClick={handleOnClick}>Delete</button>
    </div>
  );
};

export default BookComponent;
