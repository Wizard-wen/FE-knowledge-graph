import { BaseComponentInterface } from '../interface';

export class BaseDecorator implements BaseComponentInterface {
  protected component: BaseComponentInterface;

  constructor(component: BaseComponentInterface) {
    this.component = component;
  }

  /**
   * The Decorator delegates all work to the wrapped component.
   */
  public operation(): string {
    return this.component.operation();
  }
}
