const eqObjects = require('../eqObjects');
const assert = require("chai").assert;

describe("#eqObjects", () => {

  it('should return true for eqObjects({ a: "1", b: "2" },{ b: "2", a: "1" })', () => {
    assert.isTrue(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });

  it('should return false for eqObjects({ a: "1", b: "2" },{ a: "1", b: "2", c: "3" })', () => {
    assert.isFalse(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }));
  });

  it('should return true for eqObjects({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" })', () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  });

  it('should return false for eqObjects({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] })', () => {
    assert.isFalse(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }));
  });
});
/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false */