import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import AdminLogin from './views/Auth/Login';
import AdminRegister from './views/Auth/Logout';
import AdminProfile from './views/Dashboard/Profile/Profile';
import Dashboard from './views/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import { product_data } from './data';

export const  Context = createContext()

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(product_data)

  return (
    <Context.Provider value={{isMenuOpen, setIsMenuOpen}}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/register" element={<AdminRegister />} />
        <Route path="admin/profile" element={<AdminProfile />} />
        <Route path='dashboard/*' element={<Dashboard />} />

      </Routes>
    </Context.Provider>
  );
}

export default App;
