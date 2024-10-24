import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Movies from "./components/movies";
import HeaderContent from "./components/HeaderContent";
import Modal from "./components/Modal";
import ServerModal from "./components/ServerModal";
import URLObserver from "./observer/URLObserver";

const INIT_DATA = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById("HEADER"), <HeaderContent movie={INIT_DATA.movies[0]} />);
hydrateRoot(document.getElementById("MOVIE_ITEMS"), <Movies movies={INIT_DATA.movies} />);

const isDetailPath = (path) => /^\/detail\/[^\/]+$/.test(path);

const currentPath = window.location.pathname;

if (isDetailPath(currentPath)) {
  const root = hydrateRoot(document.getElementById("MODAL_AREA"), <ServerModal movie={INIT_DATA.movie} />);
  const urlObserver = new URLObserver();
  urlObserver.addListener(() => root.render(<Modal />));
} else {
  createRoot(document.getElementById("MODAL_AREA")).render(<Modal />);
}
