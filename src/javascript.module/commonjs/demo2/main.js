// main.js
const mod = require('./lib');

console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter);// 4  现在再执行就能正确读取内部变量counter的变动了。
