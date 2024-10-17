import { Router } from "express";
import { fetchPopularMovieList } from "../apis/handler";
import {
  generateApp,
  generateHTML,
  generateInitData,
} from "../utils/htmlGenerator";

const movieRouter = Router();

movieRouter.use("/", async (req, res) => {
  const popularMovieList = await fetchPopularMovieList();

  const renderedApp = generateApp(popularMovieList);

  const renderedIniData = generateInitData(popularMovieList);

  const htmlInjectionArray = [
    ["<!--${INIT_DATA_AREA}-->", renderedIniData],
    ["<!--${ROOT_AREA}-->", renderedApp],
  ];

  const renderedHTML = generateHTML(htmlInjectionArray);

  res.send(renderedHTML);
});

export default movieRouter;
