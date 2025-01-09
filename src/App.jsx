import React, { createContext, useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { product_data } from "./data";
import Loader from "./container/Loader/Loader";

// Lazy loading components
const Landing = lazy(() => import("./views/Landing/Landing"));
const AdminLogin = lazy(() => import("./views/Auth/Login"));
const AdminRegister = lazy(() => import("./views/Auth/Logout"));
const AdminProfile = lazy(() => import("./views/Dashboard/Profile/Profile"));
const Dashboard = lazy(() => import("./views/Dashboard/Dashboard"));

export const Context = createContext();

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(product_data);

  return (
    <Context.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/register" element={<AdminRegister />} />
          <Route path="admin/profile" element={<AdminProfile />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Context.Provider>
  );
}

export default App;
