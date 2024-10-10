import React from "react";
import { hydrateRoot } from "react-dom/client";

import Header from "./components/Header";
import MovieList from "./components/MovieList";

const movies = window.__INITIAL_DATA__.movies;

hydrateRoot(document.getElementById("header"), <Header movie={movies[0]} />);
hydrateRoot(
  document.getElementById("movie-list"),
  <MovieList movies={movies} />
);
