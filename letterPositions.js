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

const letterPositions = function(sentence) {
  const results = {};

  // Need to transfer sentence to array format for forEach method
  const charsArray = sentence.split("");

  // Since indexes are needed, will use for let i, or forEach if it works
  charsArray.forEach((char, index) => {
    // determine number equivalent of the specific character
    let numChar = char.charCodeAt(0);
    // Use number equivalents for letters to make sure only letters get through
    if (numChar >= 65 && numChar <= 90 || numChar >= 97 && numChar <= 122) {
      const letter = char.toLowerCase();
      // Check if letter is already in results, if so then push new value, otherwise create array starting with current index
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter].push(index);
      }
    } // end letter validation
  });
  return results;
};

let test = letterPositions("hello");

assertArraysEqual(test['h'], [0]);
assertArraysEqual(test['e'], [1]);
assertArraysEqual(test['l'], [2, 3]);
assertArraysEqual(test['o'], [4]);