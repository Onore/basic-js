const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(prop = true) {
    this.isReversed = prop;
  }
  // Ci = (Pi + Kj) mod26
  encrypt(s, key) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    key = key.toLowerCase().repeat(Math.ceil(s.length / key.length));

    let counter = 0;
    let res = s.split("").map((el, idx) => {
      el = el.toLowerCase();

      if (letters.findIndex((v) => v === el) === -1) {
        counter++;
        return el;
      }

      let fixIdx = counter > 0 ? idx - counter : idx;

      let pj = letters.findIndex((v) => v === el);
      let kj = letters.findIndex((v) => v === key[fixIdx]);

      return letters[(pj + kj) % 26];
    });

    return this.isReversed
      ? res.join("").toUpperCase()
      : res.reverse().join("").toUpperCase();
  }

  // Ci = (Pi + 33 - Kj) mod 26
  decrypt(s, key) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    key = key.toLowerCase().repeat(Math.ceil(s.length / key.length));

    let counter = 0;
    let res = s.split("").map((el, idx) => {
      el = el.toLowerCase();

      if (letters.findIndex((v) => v === el) === -1) {
        counter++;
        return el;
      }

      let fixIdx = counter > 0 ? idx - counter : idx;

      let pj = letters.findIndex((v) => v === el);
      let kj = letters.findIndex((v) => v === key[fixIdx]);
      return letters[(pj + 26 - kj) % 26];
    });

    return this.isReversed
      ? res.join("").toUpperCase()
      : res.reverse().join("").toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
