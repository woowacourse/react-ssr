import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const { movies, bestMovie } = window.__INITIAL_DATA__;

console.log(window.__INITIAL_DATA__);

hydrateRoot(
  document.getElementById("root"),
  <App movies={movies} bestMovie={bestMovie} />
);
