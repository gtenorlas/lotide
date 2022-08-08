//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) {
  const newObject = {};
  for (const each of allItems) {
    //check if the element is a key to ItemsToCount and has a value of true
    if (itemsToCount[each] === true) {
      //check if element is is NewObject
      if (newObject[each] === undefined) {
        //if not add the key and a value of 1
        newObject[each] = 1;
      } else {
        //if it is, increase the value
        newObject[each] += 1;
      }
    }
  }
  return newObject;
};

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


//TEST CODE
const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;