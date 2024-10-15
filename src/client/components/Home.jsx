import React from "react";
import MovieList from "./MovieList";
import MovieBanner from "./MovieBanner";
import Footer from "./Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Home() {
  const movies = useLoaderData();

  const bannerMovie = movies[0];

  return (
    <div id="wrap">
      <header>
        <MovieBanner movie={bannerMovie} />
      </header>
      <div className="container">
        <main>
          <MovieList movies={movies} />
        </main>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}
