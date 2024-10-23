import React from 'react';
import Layout from './Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import MovieDetailModal from './components/MovieDetailModal.jsx';

function App({ movieList, movieDetail }) {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout movieList={movieList} />} />
        <Route
          path='/detail/:id'
          element={
            <Layout movieList={movieList}>
              <MovieDetailModal movie={movieDetail} />
            </Layout>
          }
        />
        <Route path='*' element={<div>에러에요 ㅎㅎ</div>} />
      </Routes>
    </>
  );
}

export default App;
