import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "express";
import fs from "fs";
import path from "path";
import App from "../../client/App";
import { fetchNowPlayingMovieItems } from "../../apis/fetchMovies";

const router = Router();

function getInitialDataScript(movies) {
  return `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      };
    </script>
  `;
}

router.use("/", async (_, res) => {
  try {
    const movies = (await fetchNowPlayingMovieItems()) || [];
    const renderedApp = renderToString(<App movies={movies} />);

    const templatePath = path.resolve(__dirname, "index.html");
    const template = fs.readFileSync(templatePath, "utf8");

    const initialDataScript = getInitialDataScript(movies);

    const renderedHTML = template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace("<!--${INIT_DATA_AREA}-->", initialDataScript(movies));

    res.send(renderedHTML);
  } catch (error) {
    console.error("렌더링 과정에서 오류 발생", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
