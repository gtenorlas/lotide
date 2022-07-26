//FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
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
*/
const flatten = (source) => {
  const newArray=[]
  for (const each of source){
    if(Array.isArray())
  }
}