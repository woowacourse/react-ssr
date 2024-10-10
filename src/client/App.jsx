import React, { useState } from "react";
import MovieItem from "./components/MovieItem";

function App({ initialData }) {
  const [movies, setMovies] = useState(initialData || []);

  return (
    <ul className="thumbnail-list">
      {movies?.map(({ id, title, vote_average, poster_path }) => (
        <li key={id}>
          <MovieItem
            vote_average={vote_average.toFixed(1)}
            title={title}
            poster_path={poster_path}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
