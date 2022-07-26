/*
It will take in two parameters:

The array to work with
The callback (which Lodash calls "predicate")
*/

const takeUntil = function (array, callback) {
  const newArray = [];
  array.array.forEach(element => {
    if(!callback(element)) 
  });
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