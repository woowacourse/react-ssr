import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import { json, useLoaderData } from "react-router-dom";
import MainPageWithModal from "../pages/MainPage/MainPageWithModal";
import { loadMovieDetail, loadNowPlaying } from "../../../public/scripts/loadMovies";
import { TMDB_ORIGINAL_URL } from "../../../public/scripts/constants";
import { round } from "../shared/utils";

const routes = [
  {
    path: "/",
    loader: async () => {
      const movie = await loadNowPlaying();
      return json(movie);
    },
    Component() {
      const movies = useLoaderData();
      return <MainPage movies={movies} />;
    },
  },
  {
    path: "/detail/:id",
    loader: async ({ params }) => {
      const { id } = params;
      const movies = await loadNowPlaying();
      const movieDetail = await loadMovieDetail(id);

      return json({
        movies,
        movieDetail: {
          title: movieDetail.title,
          bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
          releaseYear: movieDetail.release_date.split("-")[0],
          description: movieDetail.overview,
          genres: movieDetail.genres.map(({ name }) => name),
          rate: round(movieDetail.vote_average, 1),
        },
      });
    },
    Component() {
      const { movies, movieDetail } = useLoaderData();
      return (
        <MainPageWithModal
          movies={movies}
          movieDetail={movieDetail}
        />
      );
    },
  },
];

export default routes;
