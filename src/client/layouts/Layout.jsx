import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({ movies, movieDetail }) {
  return (
    <>
      <Header movie={movies[0]} />
      <div className="container">
        <Outlet context={{ movies, movieDetail }} />
      </div>
      <Footer />
    </>
  );
}
