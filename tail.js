const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.length < 2 ? [] : arr.slice(1, arr.length);
};

const result = tail(["Dylan", "Pirrotta"]);
assertEqual((result === undefined || result.length < 2 ? result : result.join()), ["Lighthouse", "Labs", "Dylan"].join());

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);