import React from "react";
<<<<<<< HEAD
import MovieItem from "./base/MovieItem";

function Home({ movies }) {
  return (
    <div>
      {movies.length > 0 ? (
        <ul className="thumbnail-list">
          {movies.map(({ id, title, vote_average, poster_path }) => (
            <li key={id}>
              <MovieItem
                rate={vote_average}
                title={title}
                thumbnailUrl={poster_path}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>영화가 없어요</p>
      )}
=======
import starEmptyImage from "@images/star_empty.png";

function Home() {
  return (
    <div>
      <img src={starEmptyImage} />
>>>>>>> 8c9afb03c9eccd04f1c01f3233df2406c8aa6b75
    </div>
  );
}

export default Home;
