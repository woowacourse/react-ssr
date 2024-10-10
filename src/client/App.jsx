import React from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <Container movies={movies} />
      <Footer />
    </>
  );
}

export default App;
