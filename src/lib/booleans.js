const negate = a => {
  return !a;
};

const both = (a, b) => {
  return Boolean(a && b);
}


const either = (a, b) => {
  return Boolean(a || b);
};

const none = (a, b) => {
  return Boolean(!a && !b);
};

const one = (a, b) => {
  return Boolean(a && !b || !a && b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 > 0;
};

const isEven = a => {
  return (a % 2) === 0;
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a));
};

const isSquareSol = a => Boolean(Math.sqrt(a) % 1 === 0);

const startsWith = (char, string) => {
  return char === string[0];
};

const startsWithSol = (char, string) => string.charAt(0) === char;

const containsVowels = string => {
  return /a|e|i|o|u/gi.test(string)
};

const containsVowelsSol = string => {
  return string
    .split("")
    .some(letter => ["a", "e", "i", "o", "u"].includes(letter.toLowerCase()));
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};