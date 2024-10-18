import { Router } from "express";
import { fetchMovieDetail, fetchPopularMovieList } from "../apis/handler";
import transformMovieDetailData from "../utils/transformMovieDetailData";
import {
  generateApp,
  generateHTML,
  generateInitData,
} from "../utils/htmlGenerator";

const movieDetailModalRouter = Router();

movieDetailModalRouter.use("/detail/:id", async (req, res) => {
  const { id } = req.params;

  const popularMovieList = await fetchPopularMovieList();
  const movieDetailData = await fetchMovieDetail(id);

  const movieDetailInfo = transformMovieDetailData(movieDetailData);

  const renderedApp = generateApp(popularMovieList, movieDetailInfo);
  const renderedIniData = generateInitData(popularMovieList, movieDetailInfo);

  const htmlInjectionArray = [
    ["<!--${INIT_DATA_AREA}-->", renderedIniData],
    ["<!--${ROOT_AREA}-->", renderedApp],
  ];

  const renderedHTML = generateHTML(htmlInjectionArray);

  res.send(renderedHTML);
});

export default movieDetailModalRouter;
