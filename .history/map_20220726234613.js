const words = ["ground", "control", "to", "major", "tom"];

/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



//note that word => word[0] is an anonymous function and it's a call-back function as it's being called in the map function
//the anonymous function just returns the first letter of the word
const results1 = map(words, word => word[0]);
console.log(results1);

//FUNCTION IMPLEMENTATION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length)
    return false;
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual(map([1, 2, 3], x => x * 5), [5, 10, 15]); //true
assertArraysEqual(map(['ab', 'bc', 'cde'], secondLetter => secondLetter[1]), ['b', 'c', 'd']); //true
assertArraysEqual

