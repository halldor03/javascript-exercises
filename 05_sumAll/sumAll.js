const sumAll = function (first, last) {
  if (
    !Number.isInteger(first) ||
    !Number.isInteger(last) ||
    first < 0 ||
    last < 0
  ) {
    return "ERROR";
  } else {
    if (first < last) {
      let sum = 0;
      for (let i = first; i <= last; i++) {
        sum += i;
      }
      return sum;
    } else if (first > last) {
      let sum = 0;
      for (let i = last; i <= first; i++) {
        sum += i;
      }
      return sum;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
