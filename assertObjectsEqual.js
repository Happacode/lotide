const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1 [i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    let item1 = object1[key];
    let item2 = object2[key];
    
    if (Array.isArray(item1) && !eqArrays(item1, item2)) {
      return false;
    }
    
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    return (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// console.log(eqObjects(ab, ba)); // => true
// console.log(assertObjectsEqual(ab, ba)); // => true

module.exports = assertObjectsEqual;