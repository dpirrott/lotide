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

const without = function(source, itemsToRemove) {
  if (itemsToRemove.length === 0) return source;
  let newArray = [];
  source.forEach((element) => {
    itemsToRemove.forEach((itemToRemove) => {
      if (element === itemToRemove) {
        element = null;
      }
    }); // end ItemsToRemove forEach
    if (element !== null) newArray.push(element);
  }); // end source forEach
  return newArray;
};

// Random tests
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([], [1, 2, 3]), []);
assertArraysEqual(without(["1", "2", "3"], [1, 2, 3]), ["1", "2", "3"]);