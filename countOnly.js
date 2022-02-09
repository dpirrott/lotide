const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  
  // Create empty object which will eventually store counts for each item
  const onlyItems = {};

  // Method of looping through array allItems
  for (let item of allItems) {
    // Check that this item has the possiblity of being counted
    if (item in itemsToCount) {
      // Make sure it's marked as true
      if (itemsToCount[item] === true) {
        // Check if item has already been defined in onlyItems object to determine whether to set as 1, or increment previous value
        if (!onlyItems[item]){
          onlyItems[item] = 1;
        } else {
          onlyItems[item]++;
        }
      }
    }
  }
  return onlyItems;
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Joe"], undefined);