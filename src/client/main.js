import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const INITIAL_DATA = window ? window.__INITIAL_DATA__ || {} : {};

hydrateRoot(
  document.getElementById("wrap"),
  <BrowserRouter>
    <App
      movies={INITIAL_DATA?.movies}
      initialMovieDetail={INITIAL_DATA?.initialMovieDetail}
    />
  </BrowserRouter>
);
