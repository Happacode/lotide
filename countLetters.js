const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  string = string.replace(/\s+/g, '');
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};





// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;