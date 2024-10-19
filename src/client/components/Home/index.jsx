import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Home({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <Main movies={movies} />
      <Footer />
    </>
  );
}
