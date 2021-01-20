const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings.js');

const sayHelloController = (req, res) => {
  const { string } = req.params;
  const result = sayHello(string);
  res.status(200).send({ result });
};

const uppercaseController = (req, res) => {
  const { string } = req.params;
  const result = uppercase(string);
  res.status(200).send({ result });
};

const lowercaseController = (req, res) => {
  const { string } = req.params;
  const result = lowercase(string);
  res.status(200).send({ result });
};

const firstCharactersController = (req, res) => {
  const { string } = req.params;
  const { length } = req.query;
  const result = !length ? firstCharacter(string) : firstCharacters(string, length);
  res.status(200).send({ result });
};

module.exports = {
  sayHelloController,
  uppercaseController,
  lowercaseController,
  firstCharactersController,
};
