# 浏览器加载

浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到<script>标签就会停下来，等到执行完脚本，再继续向下渲染。
如果是外部脚本，还必须加入脚本下载的时间。

defer async 
```html
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
```
defer与async的区别是：
- defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；
- async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
- defer是“渲染完再执行”，async是“下载完就执行”。
- 如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。


## type="module"
```html
<script type="module" src="index.mjs"></script>
<script type="module">
  import lib2 from './lib/lib2.mjs';
  import { lib3 } from './lib/lib3.mjs';
  console.log(lib2.a, lib3);
</script>
```
- 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
- 模块脚本自动采用严格模式，不管有没有声明use strict。
- 模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
- 模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
- 同一个模块如果加载多次，将只执行一次。
