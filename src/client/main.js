import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const data = window.__INITIAL_DATA__;

hydrateRoot(
  document.getElementById("wrap"),
  <App popularMovies={data.movies.results} />
);
