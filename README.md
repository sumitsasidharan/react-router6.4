## React Router Dom v6.4 Tutorial by PedroTech

### Random Dog Photo url link

- https://random.dog/woof.json

### App.jsx Code

```js
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
```

### Root Layout

```js
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
     <div>
         <Navbar />
        <p>RootLayout</p>

        <Outlet />
     </div>
  );
}

export default RootLayout;
```