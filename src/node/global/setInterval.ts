/**
 *
 */

const timeoutAsync = async () => {
  console.log('进入promise');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 5000);
  });
};

(async () => {
  let current = 0;
  const max = 10;
  const timeout = setInterval(() => {
    if (current < max) {
      console.log(`执行第${current}次。`);
      timeoutAsync().then((data) => {
        console.log(data);
        current += 1;
      }).catch(() => {
        current += 1;
      });
      console.log('执行完毕');
    } else {
      clearInterval(timeout);
    }
  }, 1000);
})();
