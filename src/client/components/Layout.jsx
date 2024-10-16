import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import React from "react";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
