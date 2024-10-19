import express from 'express';
import path from 'path';
import './config.js';
import movieRouter from './routes/index.js';

const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use('/static', express.static(path.join(__dirname)));

app.use('/', movieRouter);
app.use('/detail/:id', movieRouter);

// 그 외 모든 경로에 대한 404 처리
app.use((_, res) => {
  res.status(404).send('Page not found');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
