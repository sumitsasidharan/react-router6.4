import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom';
import Contact from './pages/Contact';
import Data from './pages/Data';
import Home from './pages/Home';
import RootLayout from './routeLayouts/RootLayout';

// No Need for 'Routes'
export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
         <Route path="data" element={<Data />} />
         <Route path="contact" element={<Contact />} />
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
