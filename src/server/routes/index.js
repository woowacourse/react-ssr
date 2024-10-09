import { Router } from "express";

import { renderMoviesPage } from "../controllers/moviesController";

const router = Router();

router.get("/", (req, res) => {
  renderMoviesPage(req, res);
});

export default router;
