import React from "react";
import { useLoaderData } from "react-router-dom";
import Home from "../client/components/Home";
import { getTMDBData } from "./apis/getTMDBData";
import { TMDB_MOVIE_LISTS } from "../server/constants";

const routes = [
  {
    path: "/",
    async loader() {
      const { results: movies } = await getTMDBData(TMDB_MOVIE_LISTS.nowPlaying);
      return movies;
    },
    Component() {
      return <Home />;
    },
  },
  {
    path: "*",
    Component() {
      return <h1>404 not found</h1>;
    },
  },
];

export default routes;
