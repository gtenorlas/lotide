//FUNCTION IMPLEMENTATION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};


/*
This function should take in a source array and a itemsToRemove array.
It should return a new array with only those elements from source that 
are not present in the itemsToRemove array.
*/
const without = (source, itemsToRemove) => {
  const newArray = [];
  for (const eachSource of source) {
    let isNotToBeRemoved = true;
    for (const eachItemsToRemove of itemsToRemove) {
      if (eachSource === eachItemsToRemove) {
        isNotToBeRemoved = false;
        break;
      }
    }
    if (isNotToBeRemoved)
      newArray.push(eachSource)
  }
  return newArray;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]),[2,3]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]