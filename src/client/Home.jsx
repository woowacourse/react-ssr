import React from "react";
import { Header, MovieList } from "./components/index";

const Home = ({ movies }) => (
  <>
    <Header movie={movies[0]} />
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            <MovieList movies={movies} />
          </ul>
        </section>
      </main>
    </div>
  </>
);

export default Home;
