/**
 * 任务队列 (task queue)
 */

/**
 * 一个微任务（microtask）就是一个简短的"函数"，
 * 当创建该函数的函数执行之后，
 * 并且只有当 Javascript 调用栈为空，
 * 而控制权尚未返还给被 user agent 用来驱动脚本执行环境的事件循环之前，
 * 该微任务才会被执行。
 * 事件循环既可能是浏览器的主事件循环也可能是被一个 web worker 所驱动的事件循环。
 * 这使得给定的函数在没有其他脚本执行干扰的情况下运行，
 * 也保证了微任务能在用户代理有机会对该微任务带来的行为做出反应之前运行。
 */

/**
 * JavaScript 中的 Promises 和 Mutation Observer API 都使用微任务队列去运行它们的回调函数，
 * 但当能够推迟工作直到当前事件循环过程完结时，
 * 也是可以执行微任务的时机。
 * 为了允许第三方库、框架、polyfills 能使用微任务，
 * Window 暴露了 queueMicrotask() 方法，
 * 而 Worker 接口则通过WindowOrWorkerGlobalScope mixin 提供了同名的 queueMicrotask() 方法。
 */

queueMicrotask(() => {
  console.log(1);
});
