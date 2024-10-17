import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import MovieDetailModal from "@client/components/MovieDetailModal";
import StaticLayout from "../components/StaticLayout";

export const generateInitData = (movieList, movieDetailInfo) => {
  return /*html*/ `
  <script>
    window.__INITIAL_DATA__= {
      movieList: ${JSON.stringify(movieList)},
      movieDetailInfo:${JSON.stringify(movieDetailInfo)}
    }
  </script>
  
`;
};

export const generateApp = (movieList, movieDetailInfo) => {
  const renderedApp = renderToString(
    <StaticLayout movieList={movieList}>
      {movieDetailInfo && <MovieDetailModal movieDetail={movieDetailInfo} />}
    </StaticLayout>
  );

  return `<div id="root">${renderedApp}</div>`;
};

export const generateHTMLTemplate = () => {
  const templatePath = path.resolve(__dirname, "index.html");

  return fs.readFileSync(templatePath, "utf-8");
};

export const generateHTML = htmlInjectionArray => {
  let template = generateHTMLTemplate();

  htmlInjectionArray.forEach(([comment, replacement]) => {
    template = template.replace(comment, replacement);
  });

  return template;
};
