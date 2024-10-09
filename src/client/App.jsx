import React from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App({ movies }) {
  const popularMovie = movies[0];
  return (
    <div id="wrap">
      <Header movie={popularMovie} />
      <Container>
        <Home movies={movies} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
