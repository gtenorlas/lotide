//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence)=>{
  const newObject={};
  for (const each of sentence ){
    //check if each is a letter
    if ((each >="a" && each <="z") || (each >="A"))
    if(newObject[each] === undefined){
      newObject[each] = 1;
    }else {
      newObject[each] += 1;
    }
  }
}