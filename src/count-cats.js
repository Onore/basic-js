const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let num = 0;

  arr.forEach((ar) => {
    ar.forEach((v) => {
      if (v == "^^") {
        num++;
      }
      console.log(v);
    });
  });
  console.log(num);
  return num;
};
