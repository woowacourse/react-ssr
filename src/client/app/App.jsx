import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieModalProvider } from "../pages/MainPage/hooks/useMovieModal";
import MainPageWithModal from "../pages/MainPage/MainPageWithModal";

function App({ movies }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MovieModalProvider>
              <MainPage movies={movies} />
            </MovieModalProvider>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <MovieModalProvider>
              <MainPageWithModal movies={movies} />
            </MovieModalProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
