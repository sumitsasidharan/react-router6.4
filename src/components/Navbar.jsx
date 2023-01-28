import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='navList'>
         <li>
            <NavLink to="/" >Home</NavLink>
         </li>
         <li>
            <NavLink to="/contact" >Contact</NavLink>
         </li>
         <li>
            <NavLink to="/data" >Data</NavLink>
         </li>
      </ul>
    </nav>
  )
}

export default Navbar