import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../../store/slices/apiSlice';
import {
  setTitleAddBook,
  setAuthorAddBook,
  setImageUrlAddBook,
  setSynopsisAddBook,
  setPriceAddBook,
  clearAddBook
} from '../../store/slices/bookSlice';

const AddBookPage = () => {
  const { title, author, imageUrl, synopsis, price } = useSelector((state) => state.addBook);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addBook] = useAddBookMutation();

  const onChangeHandler = (event) => {
    switch (event.target.name) {
      case 'title':
        dispatch(setTitleAddBook(event.target.value));
        break;
      case 'author':
        dispatch(setAuthorAddBook(event.target.value));
        break;
      case 'imageUrl':
        dispatch(setImageUrlAddBook(event.target.value));
        break;
      case 'synopsis':
        dispatch(setSynopsisAddBook(event.target.value));
        break;
      case 'price':
        dispatch(setPriceAddBook(event.target.value));
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addBook({ title, author, imageUrl, synopsis, price })
      .unwrap()
      .then(() => {
        dispatch(clearAddBook());
        navigate('/books');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="title">Title</label>
        <br />
        <input id="title" name="title" type="text" value={title} onChange={onChangeHandler} />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input id="author" name="author" type="text" value={author} onChange={onChangeHandler} />
        <br />
        <label htmlFor="imageUrl">Image URL</label>
        <br />
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          value={imageUrl}
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="synopsis">Synopsis</label>
        <br />
        <textarea
          id="synopsis"
          name="synopsis"
          rows="4"
          cols="50"
          value={synopsis}
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="price">Price</label> <br />
        <input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={onChangeHandler}
        />{' '}
        <br />
        <br />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default AddBookPage;
