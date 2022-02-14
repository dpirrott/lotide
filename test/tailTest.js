const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns [] when passed ["Dylan"]', () => {
    assert.deepEqual(tail(["Dylan"]), []);
  });
  it('returns Pirrotta when passed ["Dylan", "Pirrotta"]', () => {
    assert.strictEqual(tail(["Dylan", "Pirrotta"]), "Pirrotta");
  });
  it('returns "Paul", "Pirrotta" when passed ["Dylan", "Paul", "Pirrotta"]', () => {
    assert.deepEqual(tail(["Dylan", "Paul", "Pirrotta"]), ["Paul", "Pirrotta"]);
  });
});