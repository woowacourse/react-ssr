import React from "react";

export default function MovieDetailModal({ movie }) {
  const { title, thumbnail, releaseYear, genres, rate, description } = movie;

  return (
    <div className="modal-background active">
      <div className="modal">
        <button className="close-modal">
          <img src="/static/images/modal_button_close.png" />
        </button>
        <div className="modal-container">
          {movie ? (
            <>
              <div className="modal-image">
                <img src={`https://image.tmdb.org/t/p/original${thumbnail}`} />
              </div>
              <div className="modal-description">
                <h2>{title}</h2>
                <p className="category">
                  {releaseYear} · {genres.join(", ")}
                </p>
                <p className="rate">
                  <img src="/static/images/star_empty.png" className="star" />
                  <span>{rate}</span>
                </p>
                <hr />
                <p className="detail">{description}</p>
              </div>
            </>
          ) : (
            "영화 정보를 찾을 수 없습니다."
          )}
        </div>
      </div>
    </div>
  );
}
