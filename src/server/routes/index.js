import fs from "fs";
import path from "path";
import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "../../common/routes";

// --------------------------------------
// @remix-run/express에서 제공하는 fetch request 생성 함수
function createFetchRequest(req, res) {
  let origin = `${req.protocol}://${req.get("host")}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  res.on("close", () => controller.abort());

  let headers = new Headers();

  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let init = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
// --------------------------------------

const router = Router();

// 각 라우트에 필요한 데이터 로딩 함수와 라우트 정보를 생성
const { query, dataRoutes } = createStaticHandler(routes);

router.use("*", async (req, res) => {
  // express reuqest를 react router에서 처리할 수 있는 fetch request로 변환
  const fetchRequest = createFetchRequest(req, res);
  // query로 request를 처리, 처리 결과를 context에 저장
  const context = await query(fetchRequest);
  if (context instanceof Response) {
    throw context;
  }

  // 라우트 정보와, 요청 처리 결과를 이용해 static router 생성
  const router = createStaticRouter(dataRoutes, context);
  const renderedApp = renderToString(
    // 라우트 정보, 요청 처리 결과로 리액트 앱 렌더링
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const renderedHTML = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>`
  );

  res.send(renderedHTML);
});

export default router;
