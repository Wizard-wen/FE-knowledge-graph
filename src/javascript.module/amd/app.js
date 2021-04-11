// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: 'lib',
  paths: {
    // app: '../app',
    main: '../app/main',
    messages: '../app/messages',
    print: 'print',
    // 也可以对应一个http url
    jquery: 'jquery-3.5.1'
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main'], (main) => {
  // 打印main模块返回值
  console.log(main);
});
