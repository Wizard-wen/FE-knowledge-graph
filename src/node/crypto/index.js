const { createHash } = require('crypto');

const object = {
  a: 1,
  b: 2,
  c: 'xxx',
  d: [
    'a', 'v'
  ]
};
const result = createHash('md5').update(JSON.stringify(object)).digest('hex');

const result2 = createHash('md5').update(JSON.stringify(object)).digest('hex');

console.log(result === result2);
