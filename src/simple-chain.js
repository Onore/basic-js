const CustomError = require("../extensions/custom-error");

const chainMaker = {
  s: [],
  getLength() {
    return this.s.length;
  },
  addLink(n) {
    n === null ? this.s.push("null") : this.s.push(n);
    return this;
  },
  removeLink(n) {
    if (isNaN(n) || this.s[n - 1] === undefined || !Number.isInteger(n)) {
      this.s = [];
      throw new Error(n);
    }
    this.s.splice(n - 1, 1);
    return this;
  },
  reverseChain() {
    this.s = this.s.reverse();
    return this;
  },
  finishChain() {
    str =
      "( " +
      this.s
        .filter((el) => {
          //console.log(el)
          return !Object.is(el, undefined);
        })
        .join(" )~~( ") +
      " )";

    this.s = [];
    return str;
  },
};

module.exports = chainMaker;
