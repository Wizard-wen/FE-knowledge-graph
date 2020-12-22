import basePromise from './base.promise';

// map不能起到数组中的元素分先后执行异步方法
// [1, 1, 1, 1].map(async (item, index) => {
//   const result = await basePromise.resolveInThreeSeconds(index + 1);
//   // 三秒后同时打印出1 2 3 4
//   console.log(result);
// });

// (async () => {
//   const result = await Promise.all([1, 1, 1, 1].map(
//     (item, index) => basePromise.resolveInThreeSeconds(index + 1)
//   ));
//   // 大约三秒后 [1,2,3,4]
//   console.log(result);
// })();

// 如果数组中元素过多，Promise.all()可能会导致并发请求过大
// (async (array: number[]) => {
//   console.time('start all');
//   const result = await Promise.all(array.map(
//     (item, index) => basePromise.resolveInThreeSeconds(index + 1)
//   ));
//   // 大约三秒后 [1,2,3,4]
//   console.log(result);
//   console.timeEnd('start all'); // start all: 3179.191ms
// })(Array(100000).fill(5));

// (async (array: number[]) => {
//   console.time('start all');
//   const result = await Promise.all(array.map(
//     (item, index) => basePromise.resolveInThreeSeconds(index + 1)
//   ));
//   // 大约三秒后 [1,2,3,4]
//   console.log(result);
//   console.timeEnd('start all'); // Cannot get stack trace in GC.
// })(Array(10000000).fill(5));

// promise.all数量过大往往不是v8难以承受。若异步请求为ajax，可能是服务器承受不了。
