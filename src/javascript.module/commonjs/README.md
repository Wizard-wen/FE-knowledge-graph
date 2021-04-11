# Commonjs

在每个模块中， module 的自由变量是对表示当前模块的对象的引用。 
为方便起见，还可以通过全局模块的 exports 访问 module.exports。 
module 实际上不是全局的，而是每个模块本地的。
```js
module.exports = exports = function() {

}
exports
```
