import "./config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import movieRouter from "./routes/index.js";
import { renderToString } from "react-dom/server";
import App from "../client/App.jsx";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/assets", express.static(path.join(__dirname, "../../public")));

app.use("/", movieRouter);

app.get("/", async (_, response) => {
  const initialData = await getPopularMovies();
  const html = renderToString(<App initialData={initialData} />);
  response.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
