import fs from "fs";
import "./config.js";
import express from "express";
import path from "path";
import React from "react";
import movieRouter from "./routes/index.js";
import { fetchMovieDetail, fetchPopularMovies } from "../client/api.js";
import { renderToString } from "react-dom/server";
import MoviePage from "../client/pages/MoviePage.jsx";
import { StaticRouter } from "react-router-dom/server.js";
import MovieDetail from "../client/pages/MovieDetail.jsx";
import Footer from "../client/components/Footer.jsx";

const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use("/static", express.static(path.join(__dirname)));

// 존재하지 않는 정적 파일에 대한 404 처리
app.use("/static", (req, res) => {
  res.status(404).send("Resource not found");
});

app.get("/detail/:id", async (req, res) => {
  const id = req.params.id;
  const popularMovies = await fetchPopularMovies();
  const movieDetail = await fetchMovieDetail(id);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `
  );

  const renderedApp = renderToString(
    <StaticRouter>
      <MoviePage initialData={{ movies: popularMovies }} />
      <MovieDetail initialData={{ movieDetail: movieDetail }} />
      <Footer />
    </StaticRouter>
  );

  res.send(
    initData.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

// 메인 페이지 라우트 (React 앱 렌더링)
app.get("/", async (_, res) => {
  const popularMovies = await fetchPopularMovies();

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)}
      }
    </script>
  `
  );

  const renderedApp = renderToString(
    <StaticRouter>
      <MoviePage initialData={{ movies: popularMovies }} />
      <Footer />
    </StaticRouter>
  );

  res.send(
    initData.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

// 그 외 모든 경로에 대한 404 처리
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
