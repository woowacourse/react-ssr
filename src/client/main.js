import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const movies = window.__INITIAL_DATA__.movies;

hydrateRoot(document.getElementById("root"), <App movies={movies} />);
