const obj = new Proxy({}, {
  get(target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set(target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  },

});

/**
 * 剩余参数和arguments对象之间的区别主要有三个：
 * 剩余参数只包含那些没有对应形参的实参，而arguments对象包含了传给函数的所有实参。
 * arguments对象不是一个真正的数组，而剩余参数是真正的Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
 * arguments对象还有一些附加的属性（如callee属性）。
 */

const p = new Proxy((a) => {
  console.log(a);
}, {
  // 如果函数的最后一个命名参数以...为前缀，则它将成为一个由剩余参数组成的真数组
  apply(target, ctx, ...args) {
    return Reflect.apply(target, ctx, args);
  }
});

p(12);


