const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateController = (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
};

const truthinessController = (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
};

const isOddController = (req, res) => {
  const number = parseInt(req.params.number, 10);
  return Number.isNaN(number)
    ? res.status(400).send({ error: 'Parameter must be a number.' })
    : res.status(200).send({ result: isOdd(number) });
};

const startsWithController = (req, res) => {
  const { string, character } = req.params;
  return character.length === 1
    ? res.status(200).send({ result: startsWith(character, string) })
    : res.status(400).send({ error: 'Parameter "character" must be a single character.' });
};

module.exports = {
  negateController,
  truthinessController,
  isOddController,
  startsWithController,
};
