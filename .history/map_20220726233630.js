const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}


//note that word => word[0] is an anonymous function and it's a call-back function as it's being called in the map function
const results1 = map(words, word => word[0]);
console.log(results1);

