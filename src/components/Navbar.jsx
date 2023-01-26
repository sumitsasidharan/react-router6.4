import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="navbar">
         <NavLink
            to="/"
            style={({ isActive }) => {
               return { color: isActive ? 'red' : 'grey' };
            }}>
            Home
         </NavLink>
         <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}>
            About
         </NavLink>
         <NavLink to="/products">Products</NavLink>
         <NavLink to="/dashboard">Dashboard</NavLink>
         <NavLink to="/login">Login</NavLink>
      </nav>
   );
};
export default Navbar;

// IMPORTANT: NEED TO MAKE STYLING ON THE 'ACTIVE' CLASS FOR THE HIGHLIGHT FUNCTIONALITY, check index.css, .active
