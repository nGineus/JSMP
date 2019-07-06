const express = require('express');
const mongoose = require('mongoose');
const app = express();

const deviceRouter = require('./routes/devices');
const corsMiddleware = require('./middlewares/cors');

const PORT = 4000;

app.use(express.json());
app.use(corsMiddleware);
app.use('/devices', deviceRouter);

app.get('/', (req, res) => {
  res.json({result: 'Ok Ok'});
});

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/node-workshop',
  {useNewUrlParser: true});
