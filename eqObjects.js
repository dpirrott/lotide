const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Takes in 2 objects, returns true or false based on perfect match
const eqObjects = function(object1, object2) {
  // If number of Keys don't match, return false right away
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  // Since the condition of being equal involves the same Keys with same values, we can loop through one object
  for (const key in object1) {
    // if key isn't in object 2, return false
    if (!key in object2) return false;
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "3", a: "1" };
assertEqual(eqObjects(ab, ba), false); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


// Test arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false