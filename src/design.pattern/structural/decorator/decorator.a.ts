import { BaseDecorator } from './base';

export class DecoratorA extends BaseDecorator {
  public operation(): string {
    return `DecoratorA(${super.operation()})`;
  }
}
