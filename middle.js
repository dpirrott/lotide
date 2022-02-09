const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const middle = function(array) {
  // If there's no middle
  if (array.length < 3) return [];

  // Will be whole or decimal
  let middleNum = array.length / 2;

  // If array.length even, return element at array[middleNum-1] and array[middleNum]
  if (array.length % 2 === 0) {
    const num1 = array[middleNum - 1];
    const num2 = array[middleNum];
    return [num1, num2];
  }

  // if array.length odd, return element at index array.length/2.floor
  if (array.length % 2 === 1) return [array[Math.floor(middleNum)]];

};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]