import React, { useEffect, useState } from "react";
import useCustomRouting from "../hooks/useCustomRouting";
import { round } from "../utils";
import { TMDB_ORIGINAL_URL } from "../../constants";

function Modal() {
  const { currentPath, match } = useCustomRouting();
  const id = match.params[0];
  const INIT_DATA = window.__INITIAL_DATA__;
  const [movie, setMovie] = useState(INIT_DATA.movies.find((movie) => movie.id === Number(id)));

  useEffect(() => {
    if (id) {
      async function getMovie() {
        const res = await fetch(`/api/getMovie/${id}`);
        const { movie } = await res.json();
        setMovie(movie);
      }
      getMovie();
    }
  }, [currentPath]);

  if (match.name !== "detail" && !id) return null;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={() => window.history.pushState({}, "", `/`)}>
          <img src={"/assets/images/modal_button_close.png"} />
        </button>
        <div className="modal-container">
          <div className="modal-image">{movie && <img src={TMDB_ORIGINAL_URL + movie?.poster_path} />}</div>
          <div className="modal-description">
            <h2>{movie?.title}</h2>
            <p className="category">
              {movie?.release_date.split("-")[0]} · {movie?.genres?.map(({ name }) => name).join(" ")}
            </p>
            <p className="rate">
              <img src={"/assets/images/star_empty.png"} className="star" />
              <span>{round(movie?.vote_average, 1)}</span>
            </p>
            <hr />
            <p className="detail">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  //   onCloseButtonClick: PropTypes.func,
};
