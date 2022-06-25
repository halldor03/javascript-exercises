const ftoc = function (fahrenheit) {
  const celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  if (celsius % 1 === 0) {
    return parseInt(celsius);
  } else {
    return parseFloat(celsius);
  }
};

const ctof = function (celsius) {
  const fahrenheit = (celsius * (9 / 5) + 32).toFixed(1);
  if (fahrenheit % 1 === 0) {
    return parseInt(fahrenheit);
  } else {
    return parseFloat(fahrenheit);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
