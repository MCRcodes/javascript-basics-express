const { add, subtract, multiply, divide, remainder } = require('../lib/numbers.js');

const addController = (req, res) => {
  const n1 = Number(req.params.a);
  const n2 = Number(req.params.b);
  return Object.is(n1, NaN) || Object.is(n2, NaN)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: add(n1, n2) });
};

const subtractController = (req, res) => {
  const { a, b } = req.params;
  const n1 = Number(a);
  const n2 = Number(b);
  return Object.is(n1, NaN) || Object.is(n2, NaN)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: subtract(n2, n1) });
};

const multiplyController = (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
    : res.status(200).send({ result: multiply(a, b) });
};

const divideController = (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if ((!req.body.a && req.body.a !== 0) || (!req.body.b && req.body.b !== 0)) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  res.status(200).send({ result: divide(a, b) });
};

const remainderController = (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if ((!req.body.a && req.body.a !== 0) || (!req.body.b && req.body.b !== 0)) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  res.status(200).send({ result: remainder(a, b) });
};

module.exports = {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
};
