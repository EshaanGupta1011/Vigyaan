// src/AppRoutes.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "./Context";

// Pages
import App from "./App";
import Login from "./Pages/Login/Login";
import DataScience from "./Pages/DataScience/DataScience";
import MachineLearning from "./Pages/MachineLearning/MachineLearning";
import Signup from "./Pages/Signup/Signup";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const AppRoutes = () => {
  return (
    <UserProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
      </Routes>
    </UserProvider>
  );
};

export default AppRoutes;
