import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <p>the dash board layout</p>

      <Outlet />
      <footer>the footer, or any components needed</footer>
    </>
  )
}

export default DashboardLayout