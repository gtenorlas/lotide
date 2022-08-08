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

