import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App({ initialMovieList }) {
  const [movieList, setMovieList] = useState(initialMovieList);

  const updateMovieList = async () => {
    const data = await fetchPopularMovieList();

    setMovieList(data);
  };

  useEffect(() => {
    if (!initialMovieList) {
      updateMovieList();
    }
  }, []);

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
