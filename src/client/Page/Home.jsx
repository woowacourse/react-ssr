import React from "react";
import Header from '../components/Header/Header'
import MovieList from '../components/MovieList'

function Home({bestMovie, movies}) {
  return ( 
  <>
    <Header bestMovie={bestMovie} />
    <div className="container">
      <main>
        <section>
        <ul className="thumbnail-list">
          <MovieList movies={movies}/>
          </ul>
        </section>
      </main>
    </div>
  </>
  );
}

export default Home;
