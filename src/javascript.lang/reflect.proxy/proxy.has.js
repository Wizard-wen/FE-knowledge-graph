/**
 *
 */

const handler = {
  has(target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
const target = { _prop: 'foo', prop: 'foo' };
const proxy = new Proxy(target, handler);
// false
console.log('_prop' in proxy);

/**
 *
 */

const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  }
});

// TypeError is thrown
console.log('a' in p);
