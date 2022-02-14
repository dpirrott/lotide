const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// random tests
assertArraysEqual(['dylan', 'paul'], ['dylan', 'paul']); // PASS
assertArraysEqual([], []); // FAIL
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // PASS
assertArraysEqual([1, "2", "3", 4, 5], [1, "2", "3", 4, 5]); // FAIL

module.exports = assertArraysEqual;