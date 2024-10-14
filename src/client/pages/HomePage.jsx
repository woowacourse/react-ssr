import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

const HomePage = ({ popularMovies, bestMovieItem }) => {
  return (
    <>
      <Header bestMovie={bestMovieItem} />
      <Home movieItems={popularMovies} />
      <Footer />
    </>
  );
};

export default HomePage;
