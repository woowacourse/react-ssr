import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import MovieList from "../components/Movie/MovieList";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MovieListPage() {
  const movies = useLoaderData();
  const bestMovie = movies[0];

  return (
    <>
      <Header bestMovie={bestMovie} />
      <MovieList movies={movies} />
      <Footer />
      <Outlet />
    </>
  );
}
