const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n, turnsSpeed) {
  // Get how much turn per second
  let turnPerSecond = turnsSpeed / 3600;
  let turns = 2 ** n - 1;

  return { turns: turns, seconds: Math.floor(turns / turnPerSecond) };
};
