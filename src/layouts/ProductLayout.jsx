import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const ProductLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>product layout</h1>
      <Outlet />
    </div>
  )
}

export default ProductLayout