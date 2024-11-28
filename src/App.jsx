// src/App.js
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import AdminLogin from './views/Auth/Login';
import AdminRegister from './views/Auth/Logout';
import AdminProfile from './views/Dashboard/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
