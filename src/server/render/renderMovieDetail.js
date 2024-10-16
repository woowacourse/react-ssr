import { parseMovieDetail } from "../models/parseMovieDetail";

const renderMovieDetail = (renderedHome, movieDetail) => {
  const movieItem = parseMovieDetail(movieDetail);

  const modalData = /*html*/ `
  <script>
      window.__INITIAL_DATA__.movie = ${JSON.stringify(movieItem)};
  </script>
`;

  return renderedHome.replace("<!--${INIT_MODAL_DATA_AREA}-->", modalData);
};

export default renderMovieDetail;
