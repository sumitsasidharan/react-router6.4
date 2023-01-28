import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const BookLayout = () => {
   const [searchParams, setSearchParams] = useSearchParams({ query: 3 });
   const number = searchParams.get("query");

   // const [number, setNumber] = useState(3);

  return (
     <>
        <nav>
           <ul>
              <li>
                 <Link to="/books/1">Book 1</Link>
              </li>
              <li>
                 <Link to="/books/2">Book 2</Link>
              </li>
              <li>
                 <Link to="/books/new">New Book</Link>
              </li>
              <li>
                 <Link to={`/books/${number}`}>Book {number}</Link>
              </li>
           </ul>
        </nav>

        <Outlet context={{ hello: 'World!' }} />

        <input
           type="number"
           value={number}
           onChange={(e) => setSearchParams({ query: e.target.value })}
        />
     </>
  );
}

export default BookLayout