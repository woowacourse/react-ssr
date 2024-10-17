import App from "../../client/AppPage";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { TMDB_MOVIE_LISTS, FETCH_OPTIONS } from "../constants";
import { StaticRouter } from "react-router-dom/server";
import { createStaticRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "../../client/main";

const router = Router();

router.use("/", async (_, res) => {
  const movies = (
    await fetch(TMDB_MOVIE_LISTS.popular, FETCH_OPTIONS).then((res) =>
      res.json()
    )
  ).results;

  // 2. 서버 측에서 사용하는 StaticRouter를 설정
  const router = createStaticRouter(
    [
      {
        path: "/",
        element: <AppPage movies={movies} />,
      },
      {
        path: "/detail:id",
        element: <AppPage movies={movies} />,
      },
    ],
    { location: req.url }
  );

  // 3. 서버에서 React를 HTML로 렌더링
  const appHtml = renderToString(
    <StaticRouter location={req.url}>
      <RouterProvider router={router} />
    </StaticRouter>
  );

  // const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
  );

  res.send(
    initData.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  );
});

export default router;
