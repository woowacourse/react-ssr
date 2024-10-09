import { fetchPopularMovies } from "../src/fetch";

export const parseMovies = async (movieData) => {
  const formattedMovieData = movieData.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    thumbnail: movie.poster_path,
    rate: movie.vote_average,
    background: movie.backdrop_path,
  }));

  return formattedMovieData;
};

const getMovieList = async () => {
  const movieData = await fetchPopularMovies();
  return parseMovies(movieData);
};

export const renderMoviesTemplate = (template, movieList) => {
  const bestMovieItem = movieList[0];
  const moviesHTML = renderMovieItems(movieList).join("");

  template = template.replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", moviesHTML);
  template = template.replace(
    "${background-container}",
    "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" +
      bestMovieItem.background
  );
  template = template.replace("${bestMovie.rate}", bestMovieItem.rate);
  template = template.replace("${bestMovie.title}", bestMovieItem.title);

  return template;
};

export const renderMovieItems = (movieItems = []) =>
  movieItems.map(
    ({ id, title, thumbnail, rate }) => /*html*/ `
      <li>
      <a href="/detail/${id}">
        <div class="item">
          <img
            class="thumbnail"
            src="https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}"
            alt="${title}"
          />
          <div class="item-desc">
            <p class="rate"><img src="../images/star_empty.png" class="star" /><span>${rate}</span></p>
            <strong>${title}</strong>
          </div>
        </div>
      </a>
    </li>
    `
  );

export const renderMoviesPage = async (template) => {
  try {
    const movieList = await getMovieList();

    // template = template.replace(
    //   "<!--${INIT_DATA_AREA}-->",
    //   /*html*/ `
    //   <script>
    //     window.__INITIAL_DATA__ = {
    //       movies: ${JSON.stringify(popularMovies)}
    //     }
    //   </script>
    // `
    // );

    return renderMoviesTemplate(template, movieList);
  } catch (err) {
    throw new Error("템플릿 생성에 실패했습니다.", err);
  }
};
