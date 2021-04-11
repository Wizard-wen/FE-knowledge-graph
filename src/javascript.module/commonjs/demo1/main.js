// main.js 在这个函数里加载这个模块
const mod = require('./lib');
// 上面的代码说明，lib.js模块加载后，它的内部变化就影响不到输出的mod.counter 了。
// 这是因为mod.counter是一个原始类型，会被缓存。除非写成一个函数，否则得不到内部变动后的值。
console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter); // 3
