const middle = function(array) {
  // If there's no middle
  if (array.length < 3) return [];

  // Will be whole or decimal
  let middleNum = array.length / 2;

  // If array.length even, return element at array[middleNum-1] and array[middleNum]
  if (array.length % 2 === 0) {
    const num1 = array[middleNum - 1];
    const num2 = array[middleNum];
    return [num1, num2];
  }

  // if array.length odd, return element at index array.length/2.floor
  if (array.length % 2 === 1) return [array[Math.floor(middleNum)]];

};


module.exports = middle;