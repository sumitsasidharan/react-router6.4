import { Route, Routes, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BookLayout from './layouts/BookLayout';
import { ProductRoutes } from './routes/ProductRoutes';
import RootLayout from './layouts/RootLayout';

function App() {
   let element = useRoutes([
      {
         path: "/",
         element: <RootLayout />,
         children: [
            {
               index: true,
               element: <Home />
            },
            {
               path: "about",
               element: <About />
            },
            {
               path: "contact",
               element: <Contact />
            },
            {
               path: "about",
               element: <About />
            },
            
         ]
      }
   ])

   return (
      <>
         {/* MULTIPLE ROUTES */}
         {/* hard coding /books on the whole app, can be useful for ads */}
         {/* <Routes location="/books">
            <Route path="/books" element={<h1>Extra content, /books </h1>} />
         </Routes> */}

         <Navbar />

         {/* {element} */}
         <Routes>
            <Route path="/" element={<Home />} />

            {/* Book Route, the Layout Componet is not necessary */}
            <Route path="/books" element={<BookLayout />}>
               <Route index element={<BookList />} />
               <Route path=":id" element={<Book />} />
               <Route path="new" element={<NewBook />} />
            </Route>

            <Route path="/products/*" element={<ProductRoutes />} />

            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
}

export default App;
