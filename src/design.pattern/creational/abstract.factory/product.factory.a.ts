/**
 *
 */

import {
  ProductFactoryInterface,
  ModernProductInterface,
  ClassifyProductInterface
} from './interface';
import { ClassifyProductA, ModernProductA } from './concrete.product';

export class ProductFactoryA implements ProductFactoryInterface {
  public createModernProduct(): ModernProductInterface {
    return new ModernProductA();
  }

  public createClassifyProduct(): ClassifyProductInterface {
    return new ClassifyProductA();
  }
}
