import React from "react";
import MovieItems from "./MovieItems";

const Home = ({ movieItems }) => {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            <MovieItems movieItems={movieItems} />
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
