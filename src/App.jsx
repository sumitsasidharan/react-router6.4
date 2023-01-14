import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const ROLES = {
   User: 2001,
   Editor: 1984,
   Admin: 5150,
};


function App() {
   
   return (
      <Routes>
         <Route path="/" element={<RootLayout />}>
            {/* PUBLIC ROUTES */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="linkpage" element={<LinkPage />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            {/* PROTECTED ROUTES */}
            <Route element={<RequireAuth />} >
               <Route path="/" element={<Home />} />
               <Route path="editor" element={<Editor />} />
               <Route path="admin" element={<Admin />} />
               <Route path="lounge" element={<Lounge />} />
            </Route>

            {/* CATCH ALL, 404 Page Not Found */}
            <Route path="*" element={<Missing />} />
         </Route>
      </Routes>
   );
}

export default App;
