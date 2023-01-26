import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

   const isActiveStyles = ({ isActive }) => {
      return isActive ? { color: 'red' } : { color: 'grey'}
   }

   // Link has 'replace', 'reloadDocument' props , etc
  return (
    <nav>
      <ul>
         <li>
            <NavLink style={isActiveStyles} to="/" replace >Home</NavLink>
         </li>
         <li>
            <NavLink style={isActiveStyles} to="/about" >About</NavLink>
         </li>
         <li>
            <NavLink style={isActiveStyles} to="/contact" >Contact</NavLink>
         </li>
         <li>
            <NavLink style={isActiveStyles} to="/books" >Books</NavLink>
         </li>
         <li>
            <NavLink style={isActiveStyles} to="/products" >Products</NavLink>
         </li>
      </ul>
    </nav>
  )
}

export default Navbar