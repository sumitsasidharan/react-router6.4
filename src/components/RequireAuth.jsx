import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
   // const { auth } = useAuth();
   const location = useLocation();

   const auth = { roles: [5150]}

   // 'Outlet' represents any child component of 'RequireAuth' that would be wrapped around it in App.jsx
  return (
    auth?.roles?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : auth?.user
         ? <Navigate to="/unauthorised" state={{ from: location}} replace />
         : <Navigate to="/login" state={{ from: location}} replace />
  )
}

export default RequireAuth;