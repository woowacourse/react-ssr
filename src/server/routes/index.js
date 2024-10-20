import App from "../../client/App";
import fs from "fs";
import path from "path";
import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import { getMovieList } from "./movieList";
import { getMovieDetail } from "./detail";

const router = Router();

router.use("/", async (_, res) => {
  try {
    //1. 데이터 패칭
    const popularMovies = await getMovieList();

    //2. 템플릿 생성
    const templatePath = path.resolve(__dirname, "index.html");
    let template = fs.readFileSync(templatePath, "utf8");

    template = template.replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
              <script>
                window.__INITIAL_DATA__ = {
                  movies: ${JSON.stringify(popularMovies)},
                }
              </script>
            `
    );

    //3. 클라이언트의 뼈대 코드를 가져옴.
    const renderedApp = renderToString(
      <App popularMovies={popularMovies} detailMovie={null} />
    );

    //4. 클라이언트의 코드에 데이터를 삽입
    const renderedHTML = template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    );

    //5. 클라이언트에게 완성된 html 을 보내기
    res.send(renderedHTML);
  } catch (err) {
    console.error("템플릿 생성에 실패했습니다.", err);
    res.status(500).send("서버 오류가 발생했습니다.");
  }
});

router.use("/detail/:id", async (_, res) => {
  try {
    //1. 데이터 패칭
    const popularMovies = await getMovieList();
    const detailMovie = await getMovieDetail(1184918);
    console.log("detailMovie", detailMovie);

    //2. 템플릿 생성
    const templatePath = path.resolve(__dirname, "index.html");
    let template = fs.readFileSync(templatePath, "utf8");

    template = template.replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
              <script>
                window.__INITIAL_DATA__ = {
                  movies: ${JSON.stringify(popularMovies)},
                  detailMovie: ${JSON.stringify(detailMovie)},
                }
              </script>
            `
    );

    //3. 클라이언트의 뼈대 코드를 가져옴.
    const renderedApp = renderToString(
      <App popularMovies={popularMovies} detailMovie={detailMovie} />
    );

    //4. 클라이언트의 코드에 데이터를 삽입
    const renderedHTML = template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    );

    //5. 클라이언트에게 완성된 html 을 보내기
    res.send(renderedHTML);
  } catch (err) {
    console.error("템플릿 생성에 실패했습니다.", err);
    res.status(500).send("서버 오류가 발생했습니다.");
  }
});

export default router;
