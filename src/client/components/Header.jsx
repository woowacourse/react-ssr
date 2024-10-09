import React from "react";
import starEmptyImage from "@images/star_empty.png";
import Logo from "@images/logo.png";

const Header = ({ bestMovie }) => {
  const { title, rate, thumbnail } = bestMovie;
  return (
    <header>
      <div
        className="background-container"
        style={{
          backgroundImage: `url('https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}')`,
        }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={Logo} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={starEmptyImage} className="star" />
              <span className="rate-value">{rate}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
