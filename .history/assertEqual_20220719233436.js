//FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: ",actual," === ",expected]);
  }
  return false;
}


//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);