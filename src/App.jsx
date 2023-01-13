import { Link, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Products } from './pages/Products';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
   return (
      <div className="App">
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/products">Products</Link>
            </li>
         </ul>
         <hr />
         <Routes>
            <Route element={<PrivateRoute />}>
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Products />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </div>
   );
}

export default App;
