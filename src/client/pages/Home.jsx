import React from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import MovieList from "../components/base/MovieList";
import Footer from "../components/Footer";

function Home({ movies }) {
  const popularMovie = movies[0];

  return (
    <div id="wrap">
      <Header movie={popularMovie} />
      <Container>
        <MovieList movies={movies} />
      </Container>
      <Footer Footer />
    </div>
  );
}

export default Home;
