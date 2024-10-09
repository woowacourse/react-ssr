import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { renderMoviesPage } from "./movieList";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");
  template = await renderMoviesPage(template);

  //처음 서버에서 만든 html 을 클라에서 렌더링
  const renderedApp = renderToString(<App />);

  const renderedHTML = template.replace(
    "<!--${MOVIE_ITEMS_PLACEHOLDER}-->",
    renderedApp
  );

  res.send(renderedHTML);
});

router.get("/detail/:id", async (req, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");
  template = await renderMoviesPage(template);

  const { id } = req.params;
  template = renderMovieDetailModal(res, id);

  const renderedHTML = template.replace("<!--${MODAL_AREA}-->", template);

  res.send(renderedHTML);
});

export default router;
