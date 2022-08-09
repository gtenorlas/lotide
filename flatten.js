/*
A function flatten which will take in an array
containing elements including nested arrays of elements,
and return a "flattened" version of the array.

Since ES6, we can use the ... (also called as a Spread operator)
(yes, three consecutive dots) as a spread operator to destructure arrays.
We can use the spread operator on arrays within an array literal([]) to merge them.
*/
const flatten = (source) => {
  const newArray = [];
  for (const each of source) {
    if (Array.isArray(each)) {
      newArray.push(...flatten(each));
    } else {
      newArray.push(each);
    }
  }
  return newArray;
};
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;