import { switchMoviePaths } from "../utils/object";

export const MOVIE_PAGE_PATH = {
  home: "/",
  nowPlaying: "/now-playing",
  popular: "/popular",
  topRated: "/top-rated",
  upcoming: "/upcoming",
  detail: "/detail/:movieId",
};

export const MOVIE_TYPE_KEY = switchMoviePaths(MOVIE_PAGE_PATH, "nowPlaying");
