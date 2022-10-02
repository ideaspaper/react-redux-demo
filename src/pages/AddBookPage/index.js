import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setAddBookTitle,
  setAddBookAuthor,
  setAddBookImageUrl,
  setAddBookSynopsis,
  setAddBookPrice,
  addBook,
  clearAddBook
} from '../../store/actionCreators';

const AddBookPage = () => {
  const { title, author, imageUrl, synopsis, price } = useSelector((state) => state.addBookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    switch (event.target.name) {
      case 'title':
        dispatch(setAddBookTitle(event.target.value));
        break;
      case 'author':
        dispatch(setAddBookAuthor(event.target.value));
        break;
      case 'imageUrl':
        dispatch(setAddBookImageUrl(event.target.value));
        break;
      case 'synopsis':
        dispatch(setAddBookSynopsis(event.target.value));
        break;
      case 'price':
        dispatch(setAddBookPrice(event.target.value));
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addBook({ title, author, imageUrl, synopsis, price }))
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
