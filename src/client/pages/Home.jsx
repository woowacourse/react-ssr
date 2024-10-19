import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function HomePage({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <Main movies={movies} />
      <Footer />
    </>
  );
}
