import React from "react";
import { hydrateRoot } from "react-dom/client";

import Header from "./components/Header";
import MovieList from "./components/MovieList";

const INITIAL_DATA = window ? window.__INITIAL_DATA__ || {} : {};

hydrateRoot(
  document.getElementById("header"),
  <Header movie={INITIAL_DATA.movies[0]} />
);
hydrateRoot(
  document.getElementById("movie-list"),
  <MovieList movies={INITIAL_DATA.movies} />
);
