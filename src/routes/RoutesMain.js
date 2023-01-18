import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
