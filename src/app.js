const express = require('express');

const stringsRouter = require('./routes/strings-router');
const numbersRouter = require('./routes/numbers-router');
const booleansRouter = require('./routes/booleans-router');
const arraysRouter = require('./routes/arrays-router.js');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
