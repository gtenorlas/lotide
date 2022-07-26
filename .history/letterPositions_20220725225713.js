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


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if ((sentence[i] >= "a" && sentence[i] <= "z") || (sentence[i] >= "A" && sentence[i] <= "Z")) {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

const result = letterPositions("hello");
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);

const result2 =("lighthouse in the house");
assertArraysEqual(result2.l: [0],
i: [1, 11],
g: [2],
h: [3, 5, 15, 18],
t: [4, 14],
o: [6, 19],
u: [7, 20],
s: [8, 21],
e: [9, 16, 22],
n: [12]