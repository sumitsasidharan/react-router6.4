import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
   const { auth } = useAuth();
   const location = useLocation();


   // 'Outlet' represents any child component of 'RequireAuth' that would be wrapped around it in App.jsx
  return (
    auth?.user
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location}} replace />
  )
}

export default RequireAuth;