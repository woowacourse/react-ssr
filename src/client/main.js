import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Movies from "./components/movies";
import HeaderContent from "./components/HeaderContent";
import Modal from "./components/Modal";

const INIT_DATA = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById("HEADER"), <HeaderContent movie={INIT_DATA.movies[0]} />);
hydrateRoot(document.getElementById("MOVIE_ITEMS"), <Movies movies={INIT_DATA.movies} />);

createRoot(document.getElementById("MODAL_AREA")).render(<Modal />);
