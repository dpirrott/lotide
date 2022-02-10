const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  
  // Create new object to store letter counts
  const letterCounts = {};
  
  // Can use for..of loop
  for (let char of sentence) {
    // determine number equivalent of the specific character
    let numChar = char.charCodeAt(0);
    // Use number equivalents for letters to make sure only letters get through
    if (numChar >= 65 && numChar <= 90 || numChar >= 97 && numChar <= 122) {
      const letter = char.toLowerCase();
      if (!letterCounts[letter]) {
        letterCounts[letter] = 1;
      } else {
        letterCounts[letter]++;
      }
    }
  }

  return letterCounts;
};

let result = countLetters("lighthouse in the house");

assertEqual(result['l'], 1);
assertEqual(result['h'], 4);
assertEqual(result['e'], 3);
assertEqual(result['z'], undefined);