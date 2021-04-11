// lib.mjs  一个commonJS模块
let counter = 3;

function incCounter() {
  counter += 1;
}

module.exports = {
  counter,
  incCounter
};
