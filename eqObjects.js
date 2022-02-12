const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// Takes in 2 objects, returns true or false based on perfect match
const eqObjects = function(object1, object2) {
  // If number of Keys don't match, return false right away
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  // Since the condition of being equal involves the same Keys with same values, we can loop through one object
  for (const key in object1) {
    if (!(key in object2)) {
      return false;
    }
    // Check for objects
    if (object1[key] instanceof Object && object2[key] instanceof Object) {
      if (eqObjects(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] instanceof Object || object2[key] instanceof Object) {
      return false;
    } else {
      // Check for arrays
    if (object1[key] instanceof Array && object2[key] instanceof Array) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] instanceof Array || object2[key] instanceof Array) {
      return false;
    }
    // console.log(`object1[key]: ${object1[key]}, object2[key]: ${object2[key]}`);
    // All that could be left would be a possible primitive value comparison
    if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

// const ab = { a: "1", b: "2", f: '9' };
// const ba = { b: "3", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), false); // => true
// assertEqual(eqObjects(abc, ab), false); // => false


// // Test arrays
// const cd = { c: "1", d: ["2", 3, 4] };
// const dc = { d: 4, c: "1" };
// const cd2 = { c: "1", d: ["2", "3", 4] };

// assertEqual(eqObjects(cd, dc), false);
// assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { z: { w: 6, x: [1, 2, 3, 5]} }, b: 2 }, { a: { z: { w: 6, x: [1, 2, 3, 4] } }, b: 2 }), false); // => true