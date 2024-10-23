import React from "react";
import { json, useLoaderData } from "react-router-dom";

import App from "../../client/App.jsx";
import { fetchMovieDetail, fetchMovies } from "../../api/movies.ts";

export const routes = [
  {
    path: "/",
    loader: async () => {
      const movies = await fetchMovies();

      return json(movies);
    },
    Component() {
      const movies = useLoaderData();
      console.log("home");

      return <App movies={movies} movieDetail={{}} showModal={false} />;
    },
  },
  // {
  //   path: "/3/movie/popular",
  //   loader: async () => {
  //     console.log("here3");
  //     const movies = await fetchMovies();
  //     return json(movies);
  //   },
  //   Component() {
  //     const movies = useLoaderData();
  //     // console.log("movies", movies);
  //     return <App movies={movies} />;
  //   },
  // },
  {
    path: "/detail/:id",
    loader: async ({ params }) => {
      const { id } = params;
      const movies = await fetchMovies();
      const movieDetail = await fetchMovieDetail(id);

      return json({ movies, movieDetail });
    },
    Component() {
      const { movies, movieDetail } = useLoaderData();
      console.log("detail");

      return <App movies={movies} movieDetail={movieDetail} showModal={true} />;
    },
  },
];
