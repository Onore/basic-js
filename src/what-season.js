const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let s = "";

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date && !isNaN(date))) {
    console.log(date instanceof Date, isNaN(date));
    throw new Error();
  }

  let m = date.getMonth();

  if ([11, 0, 1].includes(m)) {
    s = "winter";
  } else if ([2, 3, 4].includes(m)) {
    s = "spring";
  } else if ([5, 6, 7].includes(m)) {
    s = "summer";
  } else if ([8, 9, 10].includes(m)) {
    s = "autumn";
  }

  return s;
};
