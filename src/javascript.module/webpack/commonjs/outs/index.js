!function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) {
    module.exports = t();
  } else if ('function' == typeof define && define.amd) {
    define([], t);
  } else {
    var o = t();
    for (var r in o) ('object' == typeof exports ? exports : e)[r] = o[r];
  }
}(self, (function () {
  return e = {
    562: (e, t) => {
      t.bar = function () {
        return 1;
      };
    },
    10: (e, t, o) => {
      o(562);
    }
  }, t = {}, function o(r) {
    if (t[r]) return t[r].exports;
    var n = t[r] = { exports: {} };
    return e[r](n, n.exports, o), n.exports;
  }(10);
  var e,
    t
}));
