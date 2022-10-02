import { useDeleteBookMutation } from '../../store/slices/apiSlice';

const BookComponent = ({ book }) => {
  const [deleteBook] = useDeleteBookMutation();

  const handleOnClick = () => {
    deleteBook(book.id)
      .unwrap()
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
