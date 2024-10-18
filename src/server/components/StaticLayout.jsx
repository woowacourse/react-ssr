import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App";

const StaticLayout = ({ children, movieList, location, context = {} }) => {
  return (
    <StaticRouter location={location} context={context}>
      <App movieList={movieList} />
      {children}
    </StaticRouter>
  );
};

export default StaticLayout;
