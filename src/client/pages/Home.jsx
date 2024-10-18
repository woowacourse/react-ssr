import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieItem from "../components/MovieItem";
import Footer from "../components/Footer";

function Home({ initialData }) {
  const movieList = initialData.movies;
  return (
    <>
      <Header bannerMovie={movieList[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              {movieList.map((movie) => (
                <li key={movie.id}>
                  <MovieItem movie={movie} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
