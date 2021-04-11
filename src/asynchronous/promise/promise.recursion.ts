/**
 * @author
 */

import BasePromise from './base.promise';

/**
 * promise递归执行
 */
async function cycleRequest(arr, index) {
  if (arr.length === index) {
    return;
  }
  const result = await BasePromise.resolveInThreeSeconds(arr[index]);
  console.log('success ', result);
  await cycleRequest(arr, index + 1);
}

// (async () => {
let index = 1;
const list = [];
while (index < 20) {
  list.push(index);
  index += 1;
}
cycleRequest(list, 0);
console.log('last'); // 一旦promise抛错，将退出程序。
// })();
/**
 * 若不使用try catch包裹promise执行语句，一旦出错，直接推出程序
 */
/**
 * 若promise执行时没有使用await关键字，也能执行，但是会先执行后面的语句
 */
