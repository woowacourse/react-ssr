import React from "react";
import "./config.js";
import express from "express";
import path from "path";
import { movieRouter, movieDetailModalRouter } from "./routes";
import { generateHTMLTemplate } from "./utils/htmlGenerator.js";
import { renderToString } from "react-dom/server";
import NotFondPage from "../client/components/NotFondPage.jsx";
const app = express();
const PORT = 3000;

app.use("/static", express.static(path.join(__dirname)));
app.use("/static", (req, res) => {
  res.status(404).send("Resource not found");
});

app.get("/detail/:id", movieDetailModalRouter);
// 메인 페이지 라우트 (React 앱 렌더링)
app.get("/", movieRouter);

// 그 외 모든 경로에 대한 404 처리
app.use((req, res) => {
  const renderedErrorSection = renderToString(<NotFondPage />);

  const renderedHTML = generateHTMLTemplate().replace(
    "<!--${ROOT_AREA}-->",
    renderedErrorSection
  );

  res.send(renderedHTML);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
