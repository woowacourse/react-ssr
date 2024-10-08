import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import { fetchPopularMovieList } from "../apis/handler";
import App from "@src/client/App";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const popularMovieList = await fetchPopularMovieList();

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  if (!popularMovieList[0]) return templatePath;

  const renderedApp = renderToString(<App movieList={popularMovieList} />);

  const template = fs.readFileSync(templatePath, "utf-8");
  const renderedHTML = template.replace("<!--${APP_AREA}-->", renderedApp);

  res.send(renderedHTML);
});

export default router;
