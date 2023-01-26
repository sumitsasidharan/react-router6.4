import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="products" element={<Products />} />
               <Route path="*" element={<Error />} />
            </Route>

            <Route path="dashboard" element={<DashboardLayout />}>
               <Route index element={<Dashboard />} />
               <Route path="stats" element={<h1>stats</h1>} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
// 36.09