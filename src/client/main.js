import React from "react";
import { hydrateRoot } from "react-dom/client";
import Movies from "./components/movies";

const INIT_DATA = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById("MOVIE_ITEMS_PLACEHOLDER"), <Movies initData={INIT_DATA} />);
