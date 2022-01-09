// import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT|| 5000;

try {
  app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
}
catch(error){ console.log(`${error} did not connect`)};

