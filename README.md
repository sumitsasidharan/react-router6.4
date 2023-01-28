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
import Data, { dataLoader } from './pages/Data';
import Home from './pages/Home';
import RootLayout from './routeLayouts/RootLayout';

// No Need for 'Routes'
export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
         <Route path="data" element={<Data />} loader={dataLoader} />
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

### Data Fetching in Data component

```js
import { useLoaderData, useNavigation } from 'react-router-dom';

import './Data.css';

export default function Data() {
   const dogUrl = useLoaderData();
   console.log(dogUrl);

   const navigation = useNavigation();

   if (navigation.state === 'loading') {
      return <h1>Loading....</h1>;
   }

   return (
      <div className="img_Container">
         <img src={dogUrl} alt="A DOG" />
      </div>
   );
}

export const dataLoader = async () => {
   const res = await fetch('https://random.dog/woof.json');
   const dog = await res.json();

   return dog.url;
};
```