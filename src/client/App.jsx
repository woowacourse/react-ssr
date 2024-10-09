import React from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";

function App({ movies }) {
  return (
    <>
      <Header bestMovie={movies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <Movies movies={movies} />
          </section>
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src="./static/images/woowacourse_logo.png" width="180" />
        </p>
      </footer>
    </>
  );
}

export default App;
