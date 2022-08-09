const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  /*   const firstNames = [
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
  
  
  
    //TEST CODE
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    }); */

  /*   assertEqual(result1["Jason"], 1);
    assertEqual(result1["Karima"], undefined);
    assertEqual(result1["Fang"], 2);
    assertEqual(result1["Agouhanna"], undefined); */

  it('should return Jason:1 for countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"],{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    assert.strictEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }).Jason, 1);
  });

  it('should return Karima:underfined for countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"],{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    assert.strictEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }).Karima, undefined);
  });

  it('should return Fang:2 for countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"],{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    assert.strictEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }).Fang, 2);
  });

  it('should return Agouhanna:undefined for countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"],{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    assert.strictEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }).Agouhanna, undefined);
  });

});