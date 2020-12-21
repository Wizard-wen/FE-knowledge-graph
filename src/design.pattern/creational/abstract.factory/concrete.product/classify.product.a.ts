/**
 *
 */

import {
  ClassifyProductInterface,
  ModernProductInterface
} from '../interface';

export class ClassifyProductA implements ClassifyProductInterface {
  showClassifyProduct(): string {
    return '';
  }

  getModernProductThenShow(collaborator: ModernProductInterface): string {
    return collaborator.showModernProduct();
  }
}
