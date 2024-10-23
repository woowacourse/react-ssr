import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="wrap">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
