import { ModernProductInterface } from '../interface';

export class ModernProductB implements ModernProductInterface {
  public showModernProduct(): string {
    return 'The result of the product B2.';
  }
}
