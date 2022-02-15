const assertArraysEqual = require('./assertArraysEqual');

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