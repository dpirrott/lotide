const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word.length);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ["ground".toUpperCase(), 'control'.toUpperCase(), 'to'.toUpperCase(), 'major'.toUpperCase(), 'tom'.toUpperCase()]);
assertArraysEqual(results3, ["ground".length, "control".length, "to".length, "major".length, "tom".length]);

