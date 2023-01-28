import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const timeout = setTimeout(() => {
         navigate("/", { state: "Error Not Page"})
         // navigate(-1) // go back 1, backward or forward
      }, 3000)

      return () => clearTimeout(timeout);
   }, [])

  return (
    <h1>NotFound</h1>
  )
}

export default NotFound
