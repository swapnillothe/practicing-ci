const { add } = require('./../someFuncs.js');
const assert = require('assert');

describe('add', function () {
  it('should add two numbers', function () {
    assert.deepEqual(add(2, 3), 5);
  });
});
