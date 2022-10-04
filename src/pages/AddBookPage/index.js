import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'author':
        setAuthor(event.target.value);
        break;
      case 'imageUrl':
        setImageUrl(event.target.value);
        break;
      case 'synopsis':
        setSynopsis(event.target.value);
        break;
      case 'price':
        setPrice(event.target.price);
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, imageUrl, synopsis, price })
    })
      .then((response) => {
        if (!response.ok) throw new Error('cannot post book');
        return response.json();
      })
      .then((data) => {
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
