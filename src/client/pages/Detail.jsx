import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function DetailPage({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <Main movies={movies} />
      <Footer />
    </>
  );
}
