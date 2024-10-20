import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const initialData =
  typeof window !== "undefined" ? window.__INITIAL_DATA__ || {} : {};

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App
      popularMovies={initialData.movies}
      detailMovie={initialData.detailMovie}
    />
  </BrowserRouter>
);
