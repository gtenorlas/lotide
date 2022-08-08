//const assertEqual = require('./assertEqual');


const tail = function(array) {
  const newArray = [];
  for (let x = 1; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
};

module.exports = tail;