import { useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../../store/actionCreators';

const BookComponent = ({ book }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteBook(book.id))
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
