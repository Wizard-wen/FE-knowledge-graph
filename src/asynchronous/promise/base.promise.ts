/**
 *
 */

export default {
  async resolveInThreeSeconds(data: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data === 0) {
          reject(data);
        }
        resolve(data);
      }, 3000);
    });
  }
};
