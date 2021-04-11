const { a, addCount, b, d, getCount, getNewCount } = require('./export');

console.log(a); // 1
console.log(b); // 2
addCount();
console.log(getCount()); // 2
console.log(d); // 1
