import { Router } from "express";
import { renderHomePage, renderMovieDetailPage } from "../utils/renderHTML.js";

const movieRouter = Router();

movieRouter.get("/", async (_, response) => {
  const responseHTML = await renderHomePage();
  response.send(responseHTML);
});

movieRouter.get("/detail/:id", async (request, response) => {
  const { id: movieId } = request.params;
  const responseHTML = await renderMovieDetailPage({ movieId });
  response.send(responseHTML);
});

export default movieRouter;
