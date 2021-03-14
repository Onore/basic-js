const CustomError = require("../extensions/custom-error");

module.exports = function trasform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an Array!");
  }

  const resArr = [];
  arr.forEach((el, key, ar) => {
    if (ar[key - 1] === "--double-next") {
      resArr.push(el);
    }

    // Double If start array or prev el != delete next
    if (ar[key + 1] === "--double-prev" && ar[key - 1] !== "--discard-next") {
      resArr.push(el);
    }

    // Skip Control sequences
    if (ar[key] === "--double-prev" || ar[key] === "--double-next") {
      return;
    }

    if (
      ar[key] === "--discard-prev" ||
      ar[key + 1] === "--discard-prev" ||
      ar[key] === "--discard-next" ||
      ar[key - 1] === "--discard-next"
    ) {
      return;
    }

    //console.log("add2:", el);
    resArr.push(el);
  });

  return resArr;
};
