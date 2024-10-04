import React, { useState } from "react";
import MovieItem from "./components/MovieItem";

function App({ initialData }) {
  const [movies, setMovies] = useState(initialData || []);

  return (
    <div>
      <ul className="thumbnail-list">
        {movies.results?.map(({ id, title, vote_average, poster_path }) => (
          <li key={id}>
            <MovieItem
              rate={vote_average}
              title={title}
              thumbnailUrl={poster_path}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
