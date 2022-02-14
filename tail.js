const tail = function(arr) {
  return arr.length < 2 ? [] : arr.slice(1, arr.length);
};

module.exports = tail;

