import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Pages
import App from "./App";
import Login from "./Pages/Login/Login";
import DataScience from "./Pages/DataScience/DataScience";
import MachineLearning from "./Pages/MachineLearning/MachineLearning";

const AppRoutes = () => {
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null; // No UI component, just the effect
  };

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
