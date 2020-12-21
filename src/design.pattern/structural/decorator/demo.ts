import { ComponentA } from './component.a';
import { DecoratorA } from './decorator.a';
import { DecoratorB } from './decorator.b';

const simple = new ComponentA();
const decorator1 = new DecoratorA(simple);
const decorator2 = new DecoratorB(decorator1);
console.log(1);
console.log(decorator2.operation());
