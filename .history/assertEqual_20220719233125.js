//FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  }
  return false;
}


//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);