import React from "react";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>My Application</h1>
      </header>
      <main className="layout-content">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; 2024 My Application</p>
      </footer>
    </div>
  );
};

export default Layout;
