const tail = function(arr) {
  if (arr.length === 2) return arr[1];
  return arr.length < 2 ? [] : arr.slice(1, arr.length);
};

module.exports = tail;

