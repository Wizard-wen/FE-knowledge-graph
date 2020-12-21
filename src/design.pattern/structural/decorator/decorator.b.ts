import { BaseDecorator } from './base';

export class DecoratorB extends BaseDecorator {
  public operation(): string {
    return `DecoratorB(${super.operation()})`;
  }
}
