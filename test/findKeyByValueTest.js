const findKeyByValue = require('../findKeyByValue');
const assert = require("chai").assert;

describe("#findKeyByValue", () => {


  /* assertEqual(findKeyByValue({ sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire"), "drama");
  assertEqual(findKeyByValue({ sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "That '70s Show"), undefined);
 */
  it('should return "drama" for (findKeyByValue({ sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire")', () => {
    assert.strictEqual(findKeyByValue({ sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire"), "drama");
  });

  it('should return undefined for (findKeyByValue({ sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire")', () => {
    assert.strictEqual(findKeyByValue({ sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "That '70s Show"), undefined);
  });
});