//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (object, valueToSearch) => {
  let result = undefined;
  //alternative is to get the array of properties of the object using Object.keys
  for (const prop in object) {
    if (Object.hasOwn(object, prop)) {
      //console.log(`object.${prop} = ${object[prop]}`);
      if (object[prop] === valueToSearch)
        result = prop;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);