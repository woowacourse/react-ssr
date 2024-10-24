import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "express";
import fs from "fs";
import path from "path";
import App from "../../client/App";
import {
  fetchMovieDetails,
  fetchNowPlayingMovieItems,
} from "../../apis/fetchMovies";
import { StaticRouter } from "react-router-dom/server";

const router = Router();

function getInitialDataScript(movies, movieDetail) {
  return `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      };
    </script>
  `;
}

async function renderApp(location, res, movies, movieDetail) {
  try {
    const renderedApp = renderToString(
      <StaticRouter location={location}>
        <App movies={movies} movieDetail={movieDetail} />
      </StaticRouter>
    );

    const templatePath = path.resolve(__dirname, "index.html");
    const template = fs.readFileSync(templatePath, "utf8");

    const initialDataScript = getInitialDataScript(movies, movieDetail);

    const renderedHTML = template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace("<!--${INIT_DATA_AREA}-->", initialDataScript);

    res.send(renderedHTML);
  } catch (error) {
    console.error("렌더링 과정에서 오류 발생", error);
    res.status(500).send("Internal Server Error");
  }
}

// 메인 페이지 라우트
router.get("/", async (req, res) => {
  try {
    const movies = (await fetchNowPlayingMovieItems()) || [];
    await renderApp("/", res, movies, null);
  } catch (error) {
    console.error("메인 페이지 렌더링 중 오류 발생", error);
    res.status(500).send("Internal Server Error");
  }
});

// 상세 페이지 라우트
router.get("/detail/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const [movieDetail, movies] = await Promise.all([
      fetchMovieDetails(id),
      fetchNowPlayingMovieItems(),
    ]);
    await renderApp(`/detail/${id}`, res, movies || [], movieDetail);
  } catch (error) {
    console.error("영화 디테일 렌더링 과정에서 오류 발생", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
