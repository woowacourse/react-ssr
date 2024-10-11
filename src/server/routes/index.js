import { Router } from "express";

import { fileURLToPath } from "url";

import { renderMoviesPage } from "../controllers/moviesController";

const router = Router();

router.use("/", async (_, res) => {
  renderMoviesPage(_, res);
});

export default router;
