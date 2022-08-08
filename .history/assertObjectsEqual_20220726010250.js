//FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual} === ${expected}`);
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

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //The amount of keys in Object 1 are not equal to the amount of keys in Object 2
  if (keys1.length !== keys2.length)
    return false;
  for (const each1 of keys1) {
    //check if value of the key in Object 1 is not equivalent to Object 2

    //but first, lets check if the value is an array
    if (Array.isArray(object1[each1]) && Array.isArray(object2[each1])) {
      //check if not the same array values
      if (eqArrays(object1[each1], object2[each1]) === false)
        return false;
    } else if (object1[each1] !== object2[each1]) //not array, check primitive values
      return false;
  }
  return true;
};