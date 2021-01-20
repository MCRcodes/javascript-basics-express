const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('../lib/arrays');

const elementAtIndexController = (req, res) => {
  const { array } = req.body;
  const { index } = req.params;
  res.status(200).send({ result: getNthElement(index, array) });
};

const toStringController = (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: arrayToCSVString(array) });
};

const appendController = (req, res) => {
  const { array, value } = req.body;
  res.status(200).send({ result: addToArray(value, array) });
};

const startsWithAVowelController = (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: elementsStartingWithAVowel(array) });
};

const removeElementController = (req, res) => {
  const { index } = req.query;
  const { array } = req.body;
  res.status(200).send({ result: removeNthElement(index, array) });
};

module.exports = {
  elementAtIndexController,
  toStringController,
  appendController,
  startsWithAVowelController,
  removeElementController,
};
