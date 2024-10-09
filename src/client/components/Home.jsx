import MovieItem from "./base/MovieItem";
import React from "react";

function Home({ movies }) {
  return (
    <>
      {movies.length > 0 ? (
        <>
          {movies.map(({ id, title, vote_average, poster_path }) => (
            <li key={id}>
              <MovieItem
                onClick={() => alert("하이드레이션 확인")}
                rate={vote_average}
                title={title}
                thumbnailUrl={poster_path}
              />
            </li>
          ))}
        </>
      ) : (
        <p>영화가 없어요</p>
      )}
    </>
  );
}

export default Home;
