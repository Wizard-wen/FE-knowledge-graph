/**
 * @author wizard.song
 */

// define(['jquery', 'print', 'messages'], ($, print, messages) => {
//   // Load any app-specific modules
//   // with a relative require call,
//   // like:
//   // const messages = require('./messages');
//
//   // Load library/vendor modules using
//   // full IDs, like:
//   // const print = require('print');
//
//   print(messages.getHello());
//   return 1;
// });

// 2.0+
define((require) => {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  const messages = require('messages');

  // Load library/vendor modules using
  // full IDs, like:
  const print = require('print');

  print(messages.getHello());
});
