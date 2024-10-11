import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const INITIAL_DATA = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById("root"), <App movies={INITIAL_DATA.movies} />);
