import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
   return (
      <>
         <Navbar />

         <section className="section">
            <Outlet />
            <footer>FOOTER</footer>
         </section>
      </>
   );
};

export default MainLayout;
