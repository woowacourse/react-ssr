import App from "../../client/App";
import fs from "fs";
import path from "path";
import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { fetchMovieDetail, fetchPopularMovieList } from "../apis/handler";
import MovieDetailModal from "../../client/components/MovieDetailModal";
import transformMovieDetailData from "../utils/transformMovieDetailData";

const movieDetailModalRouter = Router();

movieDetailModalRouter.use("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const popularMovieList = await fetchPopularMovieList();
  const movieDetailData = await fetchMovieDetail(id);
  console.log("상세");
  const movieDetailInfo = transformMovieDetailData(movieDetailData);

  const context = {};
  const renderedApp = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App movieList={popularMovieList} />
      <MovieDetailModal movieDetail={movieDetailInfo} />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__= {
        movieList: ${JSON.stringify(popularMovieList)},
        movieDetailInfo:${JSON.stringify(movieDetailInfo)}
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

export default movieDetailModalRouter;
