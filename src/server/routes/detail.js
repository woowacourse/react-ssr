import { fetchMovieDetail } from "../src/fetch";
import { parseMovieDetail } from "../src/parseUtils";
import { Router } from "express";
const router = Router();

export const getMovieDetail = async (movieId) => {
  const movieDetailData = await fetchMovieDetail(movieId);
  return parseMovieDetail(movieDetailData);
};

export const renderMovieDetailModal = async (template, movieId) => {
  try {
    const movieDetail = await getMovieDetail(movieId);

    const renderMoviesDetailPage = template.replace(
      "<!--${MODAL_AREA}-->",
      renderMovieDetailModal(movieDetail)
    );

    template = renderMoviesDetailPage(template, movieDetail);
  } catch (err) {
    throw new Error("영화 디테일 모달 생성에 실패했습니다.");
  }
};
