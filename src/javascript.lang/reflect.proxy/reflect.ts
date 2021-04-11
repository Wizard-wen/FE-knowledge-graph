/**
 * Reflect所有属性和方法都是静态的
 */

const duck = {
  name: 'Maurice',
  color: 'white',
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
};

Reflect.has(duck, 'color');

Reflect.ownKeys(duck);

Reflect.set(duck, 'eyes', 'black');

const obj = {
  a: 12
};

function test(number) {
  this.a = number;
}

Reflect.apply(test, obj, [2])
