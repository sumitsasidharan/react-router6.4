import { Route, Routes } from "react-router-dom";
import Book from "../pages/Book";
import BookList from "../pages/BookList";
import NewBook from "../pages/NewBook";

export function BookRoutes () {
   return (
      <Routes>
         <Route index element={<BookList />} />
         <Route path=":id" element={<Book />} />
         <Route path="new" element={<NewBook />} />
      </Routes>
   );
}