const repeatString = function (str, n) {
  if (n < 0) {
    return "ERROR";
  }
  let newstring = "";
  for (i = 0; i < n; i++) {
    newstring += str;
  }
  return newstring;
};

// Do not edit below this line
module.exports = repeatString;
