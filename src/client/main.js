import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const initialMovies = window.__INITIAL_DATA__.movies;
const initialMovie = window.__INITIAL_DATA__.movie;

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App initialMovies={initialMovies} initialMovie={initialMovie} />
  </BrowserRouter>
);
