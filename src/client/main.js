import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const INITIAL_DATA = window.__INITIAL_DATA__;
hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App
      movies={INITIAL_DATA.movies}
      bestMovie={INITIAL_DATA.bestMovie}
      movieDetail={INITIAL_DATA.movieDetail}
    />
  </BrowserRouter>
);
