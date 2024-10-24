import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App
      movies={window.__INITIAL_DATA__.movies}
      movieDetail={window.__INITIAL_DATA__.movieDetail}
    />
  </BrowserRouter>
);
