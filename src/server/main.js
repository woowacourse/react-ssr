import './config.js';

import express from 'express';
import { fileURLToPath } from 'url';
import movieRouter from './routes/index.js';
import path from 'path';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  '/assets',
  express.static(path.join(__dirname, '../../dist/server/assets'))
);

app.use('/', movieRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
