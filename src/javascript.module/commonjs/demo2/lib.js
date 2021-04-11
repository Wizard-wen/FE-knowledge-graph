// lib.mjs
let counter = 3;

function incCounter() {
  counter += 1;
}

module.exports = {
  // 输出的counter属性实际上是个取值器函数。
  get counter() {
    return counter;
  },
  incCounter
};
