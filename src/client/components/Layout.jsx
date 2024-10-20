import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ movies }) => {
  return (
    <div id="wrap">
      <Header bestMovie={movies[0]} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
