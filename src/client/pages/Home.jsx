import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const movies = useLoaderData();

  return (
    <>
      <Header movie={movies[0]} />
      <Main movies={movies} />
      <Footer />
    </>
  );
}
