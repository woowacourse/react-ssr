import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL, TMDB_ORIGINAL_URL } from "../Constant";
import { round } from "../utils";
import { createContext, useCallback, useContext, useState } from "react";
import React from "react";

const defaultMovieDetail = {
  title: "영화제목",
  bannerUrl: "",
  releaseYear: "2024",
  genres: ["SF", "드라마"],
  description: "줄거리가 없습니다.",
  rate: 9.9,
};

const defaultContext = { isOpen: false, movieId: "1022789", movieDetail: defaultMovieDetail };

const movieModalContext = createContext();

export const MovieModalProvider = ({ children }) => {
  const [context, setContext] = useState(defaultContext);

  return <movieModalContext.Provider value={{ context, setContext }}>{children}</movieModalContext.Provider>;
};

const useMovieModal = () => {
  const { context, setContext } = useContext(movieModalContext);
  const { isOpen, movieId, movieDetail } = context;

  const toggleModal = useCallback(() => setModalActivated((isOpen) => !isOpen), []);
  const setIsOpen = useCallback((isOpen) => setContext((context) => ({ ...context, isOpen })), []);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const setMovieId = useCallback((movieId) => setContext((context) => ({ ...context, movieId })), []);
  const setMovieDetail = useCallback(
    (movieDetail) => setContext((context) => ({ ...context, movieDetail: { ...movieDetail } })),
    []
  );

  const loadMovieDetail = useCallback(async (id) => {
    const url = TMDB_MOVIE_DETAIL_URL + id;
    const params = new URLSearchParams({
      language: "ko-KR",
    });
    const response = await fetch(url + "?" + params, FETCH_OPTIONS);

    return await response.json();
  }, []);

  const updateMovieDetail = useCallback(
    async (id) => {
      const movieDetail = await loadMovieDetail(id);

      setMovieDetail({
        title: movieDetail.title,
        bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
        releaseYear: movieDetail.release_date.split("-")[0],
        description: movieDetail.overview,
        genres: movieDetail.genres.map(({ name }) => name),
        rate: round(movieDetail.vote_average, 1),
      });
    },
    [loadMovieDetail, updateMovieDetail]
  );

  return {
    isOpen,
    movieId,
    movieDetail,
    openModal,
    closeModal,
    toggleModal,
    setMovieId,
    updateMovieDetail,
  };
};

export default useMovieModal;
