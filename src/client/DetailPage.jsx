import React, { useEffect, useState } from "react";
import MovieItem from "./components/MovieItem";
import { TMDB_BACKGROUND_THUMBNAIL } from "./constants";
import { Link } from "react-router-dom";
import Modal from "./components/Modal";
import logo from "@images/logo.png";
import starEmpty from "@images/star_empty.png";
import woowacourseLogo from "@images/woowacourse_logo.png";
import { getMovieDetail } from "../server/api/movie";
import { useParams } from "react-router-dom";

const DetailPage = ({ movieDetail, movies }) => {
  const bestMovie = movies[0];
  const [clientMovieDetail, setClientMovieDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    getMovieDetail(id).then((movieDetail) => {
      setClientMovieDetail(movieDetail);
    });
  }, []);

  return (
    <div id="wrap">
      {movieDetail ? (
        <Modal movieDetail={movieDetail} />
      ) : (
        <Modal movieDetail={clientMovieDetail} />
      )}
      <header>
        <div
          className="background-container"
          style={{
            backgroundImage: `url(${TMDB_BACKGROUND_THUMBNAIL}${bestMovie.backdrop_path})`,
          }}
        >
          <div className="overlay" aria-hidden="true"></div>
          <div className="top-rated-container">
            <h1 className="logo">
              <img src={logo} alt="MovieList" />
            </h1>
            <div className="top-rated-movie">
              <div className="rate">
                <img src={starEmpty} className="star" />
                <span className="rate-value">
                  {Math.round(bestMovie.vote_average * 10) / 10}
                </span>
              </div>
              <div className="title">{bestMovie.title}</div>
              <button className="primary detail">자세히 보기</button>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              {movies.map(({ id, title, vote_average, poster_path }) => (
                <li key={id}>
                  <Link to={`/detail/${id}`}>
                    <MovieItem
                      rate={vote_average}
                      title={title}
                      thumbnailUrl={poster_path}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src={woowacourseLogo} width="180" />
        </p>
      </footer>
    </div>
  );
};

export default DetailPage;
