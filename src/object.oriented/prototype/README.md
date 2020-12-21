# 基于原型的继承


```js
function Person(){}
console.log(typeof Person.prototype);
console.log(Person.prototype);
Person.prototype.constructor === Person // true
Person.prototype.__proto__ === Object.prototype // true
Person.prototype.__proto__.constructor === Object // true
Person.prototype.__proto__.__proto__ === null // true
```

- 构造函数通过prototype链接到原型对象
```js
function Person(){}
const person1 = new Person();
const person2 = new Person();
person1 !== person2; // true
person1.__proto__ === Person.prototype; // true
person1.__proto__.constructor === Person; // true
person1.__proto__ === person2.__proto__; // true
```


```js
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

typeof
instanceof
in
__proto__
Object.create();

Object.prototype.isPrototypeOf();

Object.prototype.hasOwnProperty();
Object.keys();
