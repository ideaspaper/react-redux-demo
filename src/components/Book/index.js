const BookComponent = ({ book, onClickDelete }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.image_url} alt={book.title} height="300" />
      <p>ID: {book.id}</p>
      <p>Author: {book.author}</p>
      <p>Synopsis: {book.synopsis}</p>
      <button onClick={() => onClickDelete(book.id)}>Delete</button>
    </div>
  );
};

export default BookComponent;
