import {
   createBrowserRouter,
   Route,
   createRoutesFromElements,
   RouterProvider,
} from 'react-router-dom';
// pages
import About from './pages/About';
import Home from './pages/Home';

// layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import FAQ from './pages/help/FAQ';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import CareersLayout from './layouts/CareersLayout';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />

         {/* HELP ROUTE */}
         <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
         </Route>

         <Route path="careers" element={<CareersLayout />}>
            <Route index element={<Careers />} loader={careersLoader} />
            <Route
               path=":id"
               element={<CareerDetails />}
               loader={careerDetailsLoader}
            />
         </Route>

         {/* 404 NOT FOUND ROUTE */}
         <Route path="*" element={<NotFound />} />
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
