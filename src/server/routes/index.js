import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { fetchPopularMovieList } from "../apis/handler";
import StaticLayout from "../components/StaticLayout";

const movieRouter = Router();

movieRouter.use("/", async (req, res) => {
  const popularMovieList = await fetchPopularMovieList();

  const renderedApp = renderToString(
    <StaticLayout movieList={popularMovieList} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__= {
        movieList: ${JSON.stringify(popularMovieList)},
        movieDetailInfo:undefined
      }
    </script>
    
  `
  );
  const renderedHTML = initData.replace(
    "<!--${ROOT_AREA}-->",
    `<div id="root">${renderedApp}</div>`
  );

  res.send(renderedHTML);
});

export default movieRouter;
