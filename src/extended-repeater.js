const CustomError = require("../extensions/custom-error");

module.exports = function repeater(s, o) {
  let str = "";

  // Default settings
  o.repeatTimes === undefined ? (o.repeatTimes = 1) : "";
  o.separator === undefined ? (o.separator = "+") : "";
  o.addition === undefined ? (o.addition = "") : "";
  o.additionRepeatTimes === undefined ? (o.additionRepeatTimes = 1) : "";
  o.additionSeparator === undefined ? (o.additionSeparator = "|") : "";

  for (let i = 0; i < o.repeatTimes; i++) {
    str = str + s;

    // Addit str
    if (o.additionRepeatTimes > 0) {
      for (let i = 0; i < o.additionRepeatTimes; i++) {
        str += o.addition;

        // Add Separator to Addit. Str
        i < o.additionRepeatTimes - 1 ? (str += o.additionSeparator) : "";
      }
    }

    // Add Separator to Main Str
    i < o.repeatTimes - 1 ? (str += o.separator) : "";
  }

  return str;
};
