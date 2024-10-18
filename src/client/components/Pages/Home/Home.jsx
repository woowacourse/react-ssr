import React from "react";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

function Home({ movies }) {
  const bestMovie = movies[0];

  return (
    <>
      <Header bestMovie={bestMovie} />
      <Container movies={movies} />
      <Footer />
    </>
  );
}

export default Home;
