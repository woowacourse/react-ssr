import React, { useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { SESSION_STORAGE_KEY } from "./constants";

function App({ movieList }) {
  const location = useLocation();
  const savePathname = () => {
    const { pathname } = location;
    sessionStorage.setItem(SESSION_STORAGE_KEY.previousPathname, pathname);
  };
  const reloadPage = () => {
    const previousPathname = sessionStorage.getItem(
      SESSION_STORAGE_KEY.previousPathname
    );
    if (!previousPathname) return;
    if (location.pathname !== previousPathname) {
      window.location.reload();
    }
  };
  useEffect(() => {
    reloadPage();
    savePathname();
  }, [location]);

  return (
    <>
      <Header movie={movieList[0]} />
      <Container movieList={movieList} />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
