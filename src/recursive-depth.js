const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr);
    // true if arr has nested arr
    //arr.filter(el=>Array.isArray(el)).length > 0
    if (!Array.isArray(arr)) {
      return 0;
    }
    let i = 1;
    while (arr.filter((el) => Array.isArray(el)).length > 0) {
      i++;
      arr = arr.reduce((acc, el) => acc.concat(el), []);
      if (i > 35) break;
    }
    return i;
  }
};
