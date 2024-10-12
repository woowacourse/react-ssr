import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

const App = ({ movies }) => {
  return (
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
};

export default App;
