const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const flatten = function(array) {
  let flatArray = [];
  for (let num of array) {
    if (Array.isArray(num)) {
      for (let x of num) {
        flatArray.push(x);
      }
    } else {
      flatArray.push(num);
    }
  }
  return flatArray;
};

const result = flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(result, [1, 2, 3, 4, 5, 6])