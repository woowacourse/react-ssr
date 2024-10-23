import { Router } from "express";

import {
  generateApp,
  generateHTML,
  generateInitData,
} from "../utils/htmlGenerator";
import {
  loadMovieDataFromFile,
  saveMovieDataToFile,
} from "../data/movieDataManager";
import { fetchPopularMovieList } from "../../apis/handler";

const movieRouter = Router();

const getPopularMovieList = async () => {
  const movieData = loadMovieDataFromFile();
  if (movieData) return movieData;
  // 영화 데이터 없을 경우 API 요청 후, 데이터 저장
  const popularMovieList = await fetchPopularMovieList();
  saveMovieDataToFile(popularMovieList);

  return { popularMovieList };
};

movieRouter.use("/", async (req, res) => {
  const { popularMovieList } = await getPopularMovieList();

  const renderedApp = generateApp(popularMovieList);

  const renderedInitData = generateInitData(popularMovieList);

  const htmlInjectionArray = [
    ["<!--${INIT_DATA_AREA}-->", renderedInitData],
    ["<!--${ROOT_AREA}-->", renderedApp],
  ];

  const renderedHTML = generateHTML(htmlInjectionArray);

  res.send(renderedHTML);
});

export default movieRouter;
