import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import MovieDetailPage from "../../client/pages/MovieDetailPage";
import HomePage from "../../client/pages/HomePage";

const renderMovieHome = ({ movieItems, bestMovieItem, url }) => {
  const renderedApp = renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              popularMovies={movieItems}
              bestMovieItem={bestMovieItem}
            />
          }
        />
        <Route path="/detail/:movieId" element={<MovieDetailPage />} />
      </Routes>
    </StaticRouter>
  );

  const initData = /*html*/ `
    <script>
        window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movieItems)}
        }
    </script>
  `;

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  return template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${INIT_DATA_AREA}-->", initData);
};

export default renderMovieHome;
