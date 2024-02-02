import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "./home-page.css";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default IndexPage;
