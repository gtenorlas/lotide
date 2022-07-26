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
A function flatten which will take in an array 
containing elements including nested arrays of elements,
and return a "flattened" version of the array.

Since ES6, we can use the ... (also called as a Spread operator)
(yes, three consecutive dots) as a spread operator to destructure arrays. 
We can use the spread operator on arrays within an array literal([]) to merge them.
*/
const flatten = (source) => {
  const newArray = []
  for (const each of source) {
    if (Array.isArray(each)) {
      newArray.push(...flatten(each))
    } else {
      newArray.push(each);
    }
  }
  return newArray;
}
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]