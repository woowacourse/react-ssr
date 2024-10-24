import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";

import { TMDB_MOVIE_LISTS } from "../../constants";
import { loadMovieDetail, loadMovies } from "../fetch";

import Movies from "../../client/components/movies";
import HeaderContent from "../../client/components/HeaderContent";
import ServerModal from "../../client/components/ServerModal";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (req, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");

  const nowPlayingMovies = await loadMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const renderedHeaderContent = renderToString(<HeaderContent movie={nowPlayingMovies[0]} />);
  const renderedMovies = renderToString(<Movies movies={nowPlayingMovies} />);

  const template = fs.readFileSync(templatePath, "utf-8");
  const renderedHTML = template
    .replace(`<header id="HEADER"></header>`, `<header id="HEADER">` + renderedHeaderContent + `</header>`)
    .replace(
      `<ul id="MOVIE_ITEMS" class="thumbnail-list"></ul>`,
      `<ul id="MOVIE_ITEMS" class="thumbnail-list">` + renderedMovies + `</ul>`
    )
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
      }
    </script>
    <script type='module' src="/scripts"></script>
  `
    );

  res.send(renderedHTML);
});

router.get("/detail/:id", async (req, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");

  const nowPlayingMovies = await loadMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const movie = await loadMovieDetail(req.params.id);
  const renderedHeaderContent = renderToString(<HeaderContent movie={nowPlayingMovies[0]} />);
  const renderedMovies = renderToString(<Movies movies={nowPlayingMovies} />);
  const renderedModal = renderToString(<ServerModal movie={movie} />);

  const template = fs.readFileSync(templatePath, "utf-8");
  const renderedHTML = template
    .replace(`<header id="HEADER"></header>`, `<header id="HEADER">${renderedHeaderContent}</header>`)
    .replace(
      `<ul id="MOVIE_ITEMS" class="thumbnail-list"></ul>`,
      `<ul id="MOVIE_ITEMS" class="thumbnail-list">` + renderedMovies + `</ul>`
    )
    .replace(`<div id="MODAL_AREA"></div>`, `<div id="MODAL_AREA">${renderedModal}</div>`)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)},
        movie: ${JSON.stringify(movie)},
      }
    </script>
    <script type='module' src="/scripts"></script>
  `
    );

  res.send(renderedHTML);
});

router.get("/api/getMovie/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Movie ID is required",
    });
  }

  try {
    const movie = await loadMovieDetail(id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        error: "Movie not found",
      });
    }

    res.json({
      success: true,
      movie,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
});

export default router;
