const express = require('express');
const strings = require('./lib/strings.js');
const numbers = require('./lib/numbers.js');
const bool = require('./lib/booleans.js');

const app = express();
app.use(express.json()); // FOR POST

app.get('/strings/hello/:basename', (req, res) => {
  const word = strings.sayHello(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/upper/:basename', (req, res) => {
  const word = strings.uppercase(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/lower/:basename', (req, res) => {
  const word = strings.lowercase(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
});

app.get('/strings/first-characters/:basename', (req, res) => {
  if (req.query.length) {
    const n = parseInt(Object.values(req.query).join());
    const word = strings.firstCharacters(req.params.basename, n);
    res.json({ result: `${word}` }).sendStatus(200);
  } else {
    const word = strings.firstCharacter(req.params.basename);
    res.json({ result: `${word}` }).sendStatus(200);
  }
});
//-----------------------------------------------
app.get('/numbers/add/:param1/and/:param2', (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const sum = numbers.add(num1, num2);

  if (Number.isNaN(sum)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: sum });
  }
  // TO REMEMBER: sendStatus() closes the connection. You can only send body before it, not after. Instead use status to send body with or after status.
});
//--------------------------------------------------

app.get('/numbers/subtract/:param1/from/:param2', (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const diff = numbers.subtract(num2, num1);

  if (Number.isNaN(diff)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: diff });
  }
});
//--------------------------------------------------
app.post('/numbers/multiply', (req, res) => {
  const arr = Object.values(req.body);

  const prod = numbers.multiply(arr[0], arr[1]);
  if (arr.length !== 2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(prod)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: prod });
  }
});
//----------------------------------------------------

app.post('/numbers/divide', (req, res) => {
  const arr = Object.values(req.body);
  const div = numbers.divide(arr[0], arr[1]);

  if (arr[1] === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (arr.length !== 2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(div)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: div });
  }
});
//----------------------------------------------------
app.post('/numbers/remainder', (req, res) => {
  const arr = Object.values(req.body);
  const rem = numbers.remainder(arr[0], arr[1]);
  if (arr[1] === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (arr.length !== 2) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(rem)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: rem });
  }
});
//----------------------------------------------------
app.post('/booleans/negate', (req, res) => {
  const neg = bool.negate(req.body.value);

  res.status(200).json({ result: neg });
});

app.post('/booleans/truthiness', (req, res) => {
  const tr = bool.truthiness(req.body.value);
  res.status(200).json({ result: tr });
});

app.get('/booleans/is-odd/:param1', (req, res) => {
  const odder = parseInt(req.params.param1);
  if (Number.isNaN(odder)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else res.status(200).json({ result: bool.isOdd(odder) });
});

app.get('/booleans/:param1/starts-with/:param2', (req, res) => {
  if (req.params.param2.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
    
  } else res.status(200).json({ result: bool.startsWith(req.params.param2, req.params.param1) });
});

module.exports = app;
