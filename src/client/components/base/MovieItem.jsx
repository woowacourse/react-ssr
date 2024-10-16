import PropTypes from "prop-types";
import { StarEmpty } from "../../ImageResources";
import { TMDB_THUMBNAIL_URL } from "../../Constant";
import { round } from "../../utils";
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieItem({ id, rate, title, thumbnailUrl }) {
  const navigate = useNavigate();
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item" onClick={() => navigate(`/detail/${id}`)}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={StarEmpty} className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;

MovieItem.propTypes = {
  rate: PropTypes.number,
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  onClick: PropTypes.func,
};
