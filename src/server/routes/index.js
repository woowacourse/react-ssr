import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { fetchPopularMovieList } from "../apis/handler";

const router = Router();

router.use("/", async (req, res) => {
  const popularMovieList = await fetchPopularMovieList();
  const context = {};
  const renderedApp = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App movieList={popularMovieList} />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__= {
        movieList: ${JSON.stringify(popularMovieList)}
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

export default router;
