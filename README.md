# 技能知识图谱

## js面向对象/ts面向对象
- 原型链
- 继承机制
- 面向对象四大特性：封装 Encapsulation 抽象 Abstraction 继承 多态
- 接口与抽象类
- 组合与继承

## 设计模式
### 设计原则（SOLID）
  - 原则---SOLID
    - 单一职责原则 Single Responsibility Principle
    - 开闭原则 Open Closed Principle
    - 里式替换原则 Liskov Substitution Principle
    - 接口隔离原则 Interface Segregation Principle
    - 依赖反转原则 Inversion Of Control
  - 设计原则（KISS）Keep It Simple and Stupid.
  - 设计原则（DRY）Don’t Repeat Yourself

### 创造型设计模式
- [单例](src/design.pattern/creational/singleton/README.md)
- 工厂
- [抽象工厂](src/design.pattern/creational/abstract.factory/README.md)

### 结构型设计模式
- [装饰器](src/design.pattern/structural/decorator/README.md)

### 行为型设计模式
- [模板模式](src/design.pattern/behavioral/template.method/README.md)
- [观察者/发布订阅]()
- [策略模式](src/design.pattern/behavioral/strategy/README.md)

注：应当能结合工程实践说出具体用例。

## TypeScript
- 泛型
- 抽象类
- 接口
- type
- 枚举
- 装饰器
注：举出工程实例

## es6+
- map/set
- reflect/proxy
- symbol
- class

## angular
- 依赖注入
- AOP/中间件

## Vue
- 组件化，无状态组件

## 工程化

### 工具链
- 微服务项目庞大拆分问题
- 团队工具链统一问题
- npm依赖，调试(npm link，直接dependency引入git地址，区分dev/peer/dependency)
- 脚手架 yeoman
- 命令行工具 commander
- 打包工具 webpack
- 前端自动化部署，上传脚本
- 代码审查工具husky eslint prettier
注：应当说明遇到了什么问题，如何思考，进而推动了工程化，推进团队工作效率


### git工作流
- git规范
- git常用命令
status pull push fetch stash merge rebase reflog checkout branch
- 冲突的解决
- [git hook -> husky](src/engineering/git/README.md) husky

## web性能优化
- 网络性能优化：服务器缓存/浏览器缓存/cdn/负载均衡
- DOM性能优化 domReady domContentLoaded 重排重绘 渲染流程机制 虚拟DOM

## web存储、认证机制、安全机制
- cookie
- localstorage
- sessionStorage
- jwt
- 安全 XSS / CSRF / ...
- token

# 异步机制
- [Promise](src/asynchronous/promise/README.md) 
- [async/await](src/asynchronous/async.await/README.md)
- [消息队列](src/asynchronous/message.queue/README.md)
- [事件循环(事件的种类)](src/asynchronous/evet.loop/README.md)
- [异步I/O](src/asynchronous/asyncIO/README.md)
- [微任务/宏任务](src/asynchronous/microtask/README.md)

## js底层与V8引擎
- 执行上下文
- 作用域链，块作用域，函数作用域，全局作用域
- 词法作用域，闭包
- 变量创建声明初始化
- 函数调用栈
- js编译机制，机器码

## HTML5 Web API
- [Web Worker](src/web.api/web.worker/README.md)
- [DOM](src/web.api/window/README.md)


## Network
- [HTTP / HTTPS](src/network/http/README.md)
- [Websocket](src/network/websocket/README.md)
- TCP
- UDP

## Node

- [Event](src/node/events/README.md)
- [Buffer](src/node/buffer/README.md)
- [child process](src/node/child.process/README.md)

## javascript模块化
- [CommonJS](src/javascript.module/commonjs/README.md)
- [ESModule](src/javascript.module/esmodule/README.md)

## Framework
- [Vue.js](src/framework/vue/README.md)
