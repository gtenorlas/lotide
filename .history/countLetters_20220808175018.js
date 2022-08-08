//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const newObject = {};
  for (const each of sentence) {
    //check if each is a letter, then add the count to the newObject
    if ((each >= "a" && each <= "z") || (each >= "A" && each <= "Z")) {
      if (newObject[each] === undefined) {
        newObject[each] = 1;
      } else {
        newObject[each] += 1;
      }
    }
  }
  return newObject;
};

const result = countLetters('LHL');
assertEqual(result.L, 2);
assertEqual(result.H, 1);

const result2 = countLetters("lighthouse in the house");
assertEqual(result2.l, 1);
assertEqual(result2.i, 2);
assertEqual(result2.g, 1);
assertEqual(result2.h, 4);
assertEqual(result2.t, 2);
assertEqual(result2.o, 2);
assertEqual(result2.u, 2);
assertEqual(result2.s, 2);
assertEqual(result2.e, 3);
assertEqual(result2.n, 1);
assertEqual(result2[" "], undefined);


