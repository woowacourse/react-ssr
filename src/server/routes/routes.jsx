import React from "react";
import { json, useLoaderData } from "react-router-dom";

import App from "../../client/App.jsx";
import MovieItem from "../../client/components/MovieItem.jsx";
import { fetchMovieDetail, fetchMovies } from "../../api/movies.ts";
import Modal from "../../client/components/Modal.jsx";

export const routes = [
  {
    path: "/",
    loader: async () => {
      const movies = await fetchMovies();

      return json(movies);
    },
    Component() {
      const movies = useLoaderData();

      return <App movies={movies} />;
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
      const movieDetail = await fetchMovieDetail(id);

      return json(movieDetail);
    },
    Component() {
      const movieDetail = useLoaderData();

      return <Modal movieDetail={movieDetail} />;
    },
  },
];
