import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const initialData = window.__INITIAL_DATA__;

const { movies } = initialData;

hydrateRoot(document.getElementById("root"), <App movieItems={movies} />);
