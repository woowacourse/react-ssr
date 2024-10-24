import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const initialData = window.__INITIAL_DATA__;

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App movies={initialData.movies} movieDetail={initialData.movieDetail} />
  </BrowserRouter>
);
