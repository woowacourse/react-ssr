import React, { useState } from "react";
import starEmptyImage from "@images/star_empty.png";
import { useModal } from "../context/ModalContext";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const { thumbnail, rate, title, id } = movie;
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleOpenDetailModal = () => {
    openModal();
    navigate(`/detail/${id}`);
  };

  return (
    <li>
      <div className="item" onClick={handleOpenDetailModal}>
        <img
          className="thumbnail"
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}`}
          alt={title}
        />
        <div className="item-desc">
          <p className="rate">
            <img src={starEmptyImage} className="star" />
            <span>{rate.toFixed(1)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
