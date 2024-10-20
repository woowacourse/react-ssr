import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  <BrowserRouter>
    <App movies={window.__INITIAL_DATA__.movies} />
  </BrowserRouter>,
  document.getElementById("root")
);
