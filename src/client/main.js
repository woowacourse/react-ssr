import React from "react";
import { hydrateRoot } from "react-dom/client";
import Movies from "./components/movies";
import HeaderContent from "./components/HeaderContent";

const INIT_DATA = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById("HEADER"), <HeaderContent movie={INIT_DATA.movies[0]} />);
hydrateRoot(document.getElementById("MOVIE_ITEMS"), <Movies movies={INIT_DATA.movies} />);
