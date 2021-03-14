const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, n = 0) {
    // Fix for recursive test
    if (n == 0) {
      return this.calculateDepth(arr, (n = 1));
    }

    if (n === 1 && arr.findIndex((el) => Array.isArray(el)) === -1) {
      return 1;
    }
    n++;

    arr = arr.reduce((ac, el) => ac.concat(el), []);
    if (arr.findIndex(Array.isArray) === -1) {
      return n;
    }

    return this.calculateDepth(arr, n);
  }
};

/* Variant without recursive */
// module.exports = class DepthCalculator {
//   calculateDepth(arr) {
//     console.log(arr);
//     // true if arr has nested arr
//     //arr.filter(el=>Array.isArray(el)).length > 0
//     if (!Array.isArray(arr)) {
//       return 0;
//     }
//     let i = 1;
//     while (arr.filter((el) => Array.isArray(el)).length > 0) {
//       i++;
//       arr = arr.reduce((acc, el) => acc.concat(el), []);
//       if (i > 35) break;
//     }
//     return i;
//   }
// };

/* 2 Second variant with recursive & flat() */
// calculateDepth(arr, n = 1) {
//   if (n === 1 && arr.findIndex((el) => Array.isArray(el)) === -1) {
//     return 1;
//   }

//   arr = arr.flat();

//   n++;
//   if (arr.findIndex((el) => Array.isArray(el)) === -1) {
//     return n;
//   }

//   return this.calculateDepth(arr, n);
// }
