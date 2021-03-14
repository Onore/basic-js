const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeat(arr) {
  let n = "";

  if (Array.isArray(arr)) {
    arr
      .flatMap((v) =>
        typeof v === "string" ? v.trim()[0].toLocaleUpperCase() : []
      )
      .sort()
      .forEach((v) => {
        if (typeof v === "string") {
          n += v;
        }
      });
  }

  return n.length > 0 ? n : false;
};
