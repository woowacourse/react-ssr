import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

function App({ popularMovies, detailMovie }) {
  return (
    <>
      <Header bestMovie={popularMovies[0]} />
      <Routes>
        <Route path="/" element={<HomePage movieList={popularMovies} />} />
        <Route
          path="/detail/:id"
          element={
            <DetailPage movieList={popularMovies} detailMovie={detailMovie} />
          }
        />
        <Route path="*" element={<div>찾으시는 페이지가 없습니다.</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
