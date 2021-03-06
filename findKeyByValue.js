const assertEqual = require('./assertEqual');

// function takes in an object and value, should scan through objects values and return corresponding key at first match
const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) return key;
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);