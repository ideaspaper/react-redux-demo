import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import booksReducer from './booksReducer';
import addBookReducer from './addBookReducer';
export default combineReducers({
  counterReducer,
  booksReducer,
  addBookReducer
});
