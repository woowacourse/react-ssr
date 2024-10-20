import React from "react";
import { hydrateRoot } from "react-dom/client";
import AppPage from "./AppPage";
import {
  createBrowserRouter,
  json,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

// const { movies } = window.__INITIAL_DATA__;

const AppRouter = createBrowserRouter([
  {
    path: "/",
    loader() {
      return json({
        movies: [
          {
            id: 698687,
            title: "트랜스포머 ONE",
            thumbnail: "/c2JXlWzvXegSda8qaATr8I47kMx.jpg",
            background: "/tAwfoDyKiYa4KQdUp3DTMrEs4En.jpg",
            rate: 7.6,
          },
        ],
      });
    },
    Component() {
      const movies = useLoaderData();
      return <AppPage movies={movies} />;
    },
  },
]);

export default AppRouter;
