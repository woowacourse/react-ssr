import Home from './components/Home';
import React from 'react';
import colorsCss from '../../public/styles/colors.css';
import mainCss from '../../public/styles/main.css';
import modalCss from '../../public/styles/modal.css';
import resetCss from '../../public/styles/reset.css';
import tabCss from '../../public/styles/tab.css';
import thumbnailCss from '../../public/styles/thumbnail.css';

function App({ movies }) {
  return (
    <html lang='ko'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href={colorsCss} />
        <link rel='stylesheet' href={mainCss} />
        <link rel='stylesheet' href={modalCss} />
        <link rel='stylesheet' href={resetCss} />
        <link rel='stylesheet' href={tabCss} />
        <link rel='stylesheet' href={thumbnailCss} />
        <title>영화 리뷰</title>
      </head>
      <body>
        <Home movies={movies} />
      </body>
    </html>
  );
}

export default App;
