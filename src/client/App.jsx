import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ({ popularMovies, bestMovieItem }) => {
  return (
    <>
      <Header bestMovie={bestMovieItem} />
      <Home movieItems={popularMovies} />
      <Footer />
    </>
  );
};

export default App;
