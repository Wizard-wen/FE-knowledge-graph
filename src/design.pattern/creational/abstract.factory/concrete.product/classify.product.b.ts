/**
 *
 */

import {
  ClassifyProductInterface,
  ModernProductInterface,
} from '../interface';

export class ClassifyProductB implements ClassifyProductInterface {
  showClassifyProduct(): string {
    return '';
  }

  getModernProductThenShow(collaborator: ModernProductInterface): string {
    return collaborator.showModernProduct();
  }
}
