import { BaseComponentInterface } from './interface';

export class ComponentA implements BaseComponentInterface {
  public operation(): string {
    return 'ComponentA';
  }
}
