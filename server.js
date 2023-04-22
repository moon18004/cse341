import express from 'express';
import route from './routes/index.js';

const port = 8081;
const app = express();

// app.use(express.json());

app.use('/', route);

app.listen(port, () => {
  console.log('Server is running on port 8081')});
