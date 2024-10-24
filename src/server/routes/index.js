import { Router } from "express";

import {
  renderMoviesPage,
  renderMovieDetail,
} from "../controllers/moviesController";

const router = Router();

router.use("/", async (_, res) => {
  await renderMoviesPage(_, res);
});

router.use("/detail/:id", async (req, res) => {
  await renderMovieDetail(req, res);
});
export default router;
