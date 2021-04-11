let count = 1;
exports.a = 1;
exports.b = 2;
exports.getNewCount = () => count + 1;
exports.d = count;
exports.addCount = () => {
  count += 1;
};
exports.getCount = () => {
  return count;
};

