import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(
  document.getElementById("wrap"),
  <App movies={window.__INITIAL_DATA__.movies} />
);
