const removeFromArray = function (array, ...removedElements) {
  console.log(`Input array: ${array}`);
  let arrayElements = [...removedElements];
  console.log(`Elements to delete: ${arrayElements}`);
  // let indexElements = arrayElements.map((x) => array.indexOf(x));
  // console.log(`Index of those elements: ${indexElements}`);
  let newArray = array.filter((elements) => !arrayElements.includes(elements));
  console.log(`Output array: ${newArray}`);
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
