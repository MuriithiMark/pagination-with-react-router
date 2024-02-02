import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./nav-bar.css";

const NavBar = () => {
  useEffect(() => {
    document.title = "tech.store";
  }, []);
  return (
    <div className="nav-bar">
      <NavLink to="/">
        <h1>tech.store</h1>
      </NavLink>
      <NavLink to="/products">
        <span>Products</span>
      </NavLink>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
