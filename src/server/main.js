import "./config.js";

import express from "express";
import movieRouter from "./routes/index.js";
import path from "path";


const app = express();
const PORT = 3000;

app.use("/static", express.static(path.join(__dirname)));
app.use("/", movieRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
