const assertEqual = require('./assertEqual');


//TEST CODE
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

const head = function(array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports=