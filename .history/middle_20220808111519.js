
/*
The middle function should return an array with only the middle element(s) of
the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.

For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/
const middle = (source) => {
  const newArray = [];
  const middle = source.length / 2;
  if (source.length > 2) {
    if (middle % 1 !== 0) { //check if it has decimal
      newArray.push(source[Math.floor(middle)]);
    } else {
      newArray.push(source[middle - 1]);
      newArray.push(source[middle]);
    }
  }
  return newArray;
};
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => [])
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

module.exports =-