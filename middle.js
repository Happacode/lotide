
const middle = function(array) {
  let arrMid = Math.floor(array.length/2);
  if (array.length < 3) {
    return console.log([]);
  } else if (array.length % 2 === 0) {
    return console.log([array[arrMid - 1], array[arrMid]]);
  } else {
    return console.log[array[arrMid]];
  }
};

module.exports = middle;