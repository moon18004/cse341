import express from 'express';
import route from './routes/index.js';



const port = 8081;
const app = express();

app.use(express.json());

app.use('/', route);


// app.get('/', (req, res, next) => {
//   res.send('<h1>Hello World</h1>');
// });

// app.get('/hello', (req, res, next) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.status(200).json({ name: 'Ellie', age: 0 });
// });

// app.use((req, res, next) => {
//   res.setHeader('node-course', 'special middleware');
//   next();
// });

// app.use((req, res) => {
//   res.send('<h1>Not Found!</h1>');
// });

app.listen(8081, () => {
  console.log('Server is running on port 8081')});
