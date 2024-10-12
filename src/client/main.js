import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const movieList = window.__INITIAL_DATA__.movieList;

hydrateRoot(document.getElementById("root"), <App movieList={movieList} />);
