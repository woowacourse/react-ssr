import React from "react";
import Main from "./components/Main";
import { MovieModalProvider } from "./hooks/useMovieModal";

function App({ movies }) {
  return (
    <>
      <MovieModalProvider>
        <Main movies={movies} />
      </MovieModalProvider>
    </>
  );
}

export default App;
