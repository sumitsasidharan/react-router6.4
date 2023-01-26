import React from 'react'
import { Outlet } from 'react-router-dom';

const ProductLayout = () => {
  return (
     <div>
        <h1>ProductLayout</h1>

        <Outlet />
     </div>
  );
}

export default ProductLayout