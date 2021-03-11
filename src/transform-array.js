const CustomError = require("../extensions/custom-error");

module.exports = function trasform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an Array!");
  }

  return arr.flatMap((v, k, arr) => {
    // First el
    if (
      k === 0 &&
      (arr[k] === "--double-prev" || arr[k] === "--discard-prev")
    ) {
      return [];
    }
    // Last el
    if (
      k === arr.length - 1 &&
      (arr[k] === "--double-next" || arr[k] === "--discard-next")
    ) {
      return [];
    }

    if (v === "--double-next") {
      return (v = arr[k + 1]);
    }
    if (v === "--double-prev") {
      return (v = arr[k - 1]);
    }
    if (v === "--discard-next") {
      return (arr[k + 1] = []);
    }
    if (arr[k + 1] === "--discard-prev") {
      arr[k + 1] = [];
      return [];
    }

    return v;
  });
};
