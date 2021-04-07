const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findkeyByValue');
const findKey = require('./findkey');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  without,
  map,
  head,
  tail,
  middle
};


// ES5 Object Propety Value Syntax
// module.exports = {
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   assertObjectsEqual: assertObjectsEqual,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   letterPositions: letterPositions,
//   takeUntil: takeUntil,
//   without:    without,
//   map:    map,
//   head:   head,
//   tail:   tail,
//   middle: middle
// };