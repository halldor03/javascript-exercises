const reverseString = function (word) {
  let array = word.split("");
  let reversedArray = array.reverse();
  let joinedArray = reversedArray.join("");
  return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
