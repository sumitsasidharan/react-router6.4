import { Route, Routes } from 'react-router-dom';
import ProductLayout from '../layouts/ProductLayout';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';

export function ProductRoutes() {
   return (
      <>
         {/* <ProductLayout /> */}
         <Routes>
            <Route element={<ProductLayout />}>
               <Route index element={<Products />} />
               <Route path=":id" element={<SingleProduct />} />
            </Route>
         </Routes>
      </>
   );
}
