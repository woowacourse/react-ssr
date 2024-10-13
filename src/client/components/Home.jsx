import React from "react";
import MovieList from "./MovieList";
import MovieBanner from "./MovieBanner";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";

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
          <section>
            <h2>지금 인기 있는 영화</h2>
            <MovieList movies={movies} />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
