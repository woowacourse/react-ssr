import "./config.js";
import express from "express";
import path from "path";

import movieRouter from "./routes/index.js";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/static", express.static(path.join(__dirname, "../../public")));

app.use("/static", (req, res) => {
  res.status(404).send("Resource not found");
});

app.use("/", movieRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
