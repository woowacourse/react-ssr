import App from '../../client/App';
import React from 'react';
import { Router } from 'express';
import getMovies from '../../client/apis/getMovies';
import { renderToString } from 'react-dom/server';

const router = Router();

router.use('*', async (_, res) => {
  // const initData = template.replace(
  //   "<!--${INIT_DATA_AREA}-->",
  //   /*html*/ `
  //   <script>
  //     window.__INITIAL_DATA__ = {
  //       movies: ${JSON.stringify(popularMovies)}
  //     }
  //   </script>
  // `
  // );

  const movies = await getMovies.nowPlaying();
  const renderedApp = renderToString(<App movies={movies} />);

  res.send(renderedApp);
});

export default router;
