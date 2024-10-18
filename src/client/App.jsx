import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Modal from "./components/Modal";

function App({ initialData }) {
  const location = useLocation();
  const state = location.state?.backgroundLocation || { pathname: "/" };

  const isDetailPage = location.pathname.startsWith("/detail/");

  return (
    <>
      <Routes location={isDetailPage ? state : location}>
        <Route path="/" element={<Home initialData={initialData} />} />
        <Route path="*" element={<p>404 - Page Not Found</p>} />
      </Routes>

      {isDetailPage && <Modal initialData={initialData} />}
    </>
  );
}

export default App;
