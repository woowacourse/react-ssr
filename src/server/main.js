import './config.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import movieRouter from './routes/index.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, '../../public')));
app.use('/bundle', express.static(path.join(__dirname, '../../dist/client/bundle.js')));

app.use('/', movieRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
