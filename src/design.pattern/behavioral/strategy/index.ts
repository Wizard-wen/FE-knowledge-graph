/**
 * @author wizard
 */

import { Context } from './context';
import { ConcreteStrategyA } from './concrete.strategy.a';
import { ConcreteStrategyB } from './concrete.strategy.b';

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
