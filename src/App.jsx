import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import BookList from './pages/BookList';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </>
   );
}

export default App;
