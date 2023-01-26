import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import ProductLayout from './layouts/ProductLayout';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProtectedRoute from './pages/ProtectedRoute';
import SingleProduct from './pages/SingleProduct';

function App() {
   const [user, setUser] = useState(null);

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="login" element={<Login setUser={setUser} />} />
               <Route
                  path="dashboard"
                  element={
                     <ProtectedRoute user={user}>
                        <Dashboard user={user} />
                     </ProtectedRoute>
                  }
               />

               {/* NESTED PRODUCT ROUTE */}
               <Route path="products" element={<ProductLayout />}>
                  <Route index element={<Products />} />
                  <Route path=":productId" element={<SingleProduct />} />
               </Route>

               <Route path="*" element={<Error />} />
            </Route>

            {/* PRODUCT ROUTE */}
            {/* <Route path="products" element={<ProductLayout />}>
               <Route index element={<Products />} />
               <Route path=":productId" element={<SingleProduct />} />
            </Route> */}

            {/* <Route path="dashboard" element={<DashboardLayout />}>
               <Route index element={<Dashboard />} />
               <Route path="stats" element={<h1>stats</h1>} />
            </Route> */}
         </Routes>
      </BrowserRouter>
   );
}

export default App;