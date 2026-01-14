import React from "react";
import { Outlet } from "react-router-dom";

import "./Public.css";

const Public = ({ children }) => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Public;
