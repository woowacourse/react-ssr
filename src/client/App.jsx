import React from 'react';
import Layout from './Router.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import MovieDetailModal from './components/MovieDetailModal.jsx';

function App({ movieList, movieDetail }) {
  const location = useLocation();
  const isModal = location.pathname.includes('/detail');

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
