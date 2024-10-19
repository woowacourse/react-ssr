import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useLoaderData, useNavigate } from "react-router-dom";
import starFilled from "@images/star_filled.png";
import modalButtonClose from "@images/modal_button_close.png";
import { getBannerUrl } from "../../common/api/tmdb";

const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
};

export default function DetailPage() {
  const { movies, movie } = useLoaderData();

  const navigate = useNavigate();

  const { title, bannerUrl, releaseYear, overview, genres, rate } = {
    title: movie.title,
    bannerUrl: getBannerUrl(movie),
    releaseYear: movie.release_date.split("-")[0],
    overview: movie.overview,
    genres: movie.genres.map(({ name }) => name),
    rate: round(movie.vote_average, 1),
  };

  return (
    <>
      <Header movie={movies[0]} />
      <Main movies={movies} />
      <Footer />
      <div className="modal-background active" id="modalBackground">
        <div className="modal">
          <button
            className="close-modal"
            id="closeModal"
            onClick={() => navigate("/")}
          >
            <img src={modalButtonClose} />
          </button>
          <div className="modal-container">
            <div className="modal-image">
              <img src={bannerUrl} />
            </div>
            <div className="modal-description">
              <h2>{title}</h2>
              <p className="category">
                {releaseYear} · {genres?.join(", ")}
              </p>
              <p className="rate">
                <img src={starFilled} className="star" />
                <span>{round(rate, 1)}</span>
              </p>
              <hr />
              <p className="detail">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
