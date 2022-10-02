import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />}></Route>
        <Route path="books" element={<BooksPage />}></Route>
        <Route path="add-book" element={<AddBookPage />}></Route>
        <Route path="counter" element={<CounterPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
