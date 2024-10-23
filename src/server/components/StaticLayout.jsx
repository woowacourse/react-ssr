import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App";

const StaticLayout = ({
  children,
  initialMovieList,
  location,
  context = {},
}) => {
  return (
    <StaticRouter location={location} context={context}>
      <App initialMovieList={initialMovieList} />
      {children}
    </StaticRouter>
  );
};

export default StaticLayout;
