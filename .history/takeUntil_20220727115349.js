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

/*
Create a new array list based off the array passed and stop when callback expression is truthy

It will take in two parameters:

The array to work with
The callback (which Lodash calls "predicate")
*/

const takeUntil = function (array, callback) {
  const newArray = [];
  //check if array that passed in the parameter is an array object
  if (Array.isArray(array)) {
    for (const each of array) {
      if (!callback(each)) {
        newArray.push(each);
      } else {
        break;
      }
    }
  }
  return newArray;
}


//TEST DATA
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


/* 
Expected output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ] */
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);