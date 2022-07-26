//FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
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
}

const result = countLetters('LHL');
assertEqual(result.L, 2);
assertEqual(result.H, 2);

const result2 = countLetters("lighthouse in the house");
assertEqual(result.l, 1)
assertEqual(result.i: 2,
  assertEqual(result.g: 1,
    assertEqual(result.h: 4,
      assertEqual(result.t: 2,
        assertEqual(result.o: 2,
          assertEqual(result.u: 2,
            assertEqual(result.s, 2,
              assertEqual(result.e, 3)
                assertEqual(result.n, 1)
