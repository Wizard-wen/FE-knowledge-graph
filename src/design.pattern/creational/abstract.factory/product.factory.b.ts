import {
  ClassifyProductInterface,
  ModernProductInterface,
  ProductFactoryInterface
} from './interface';
import { ClassifyProductB, ModernProductB } from './concrete.product';

export class ProductFactoryB implements ProductFactoryInterface {
  createModernProduct(): ModernProductInterface {
    return new ModernProductB();
  };

  createClassifyProduct(): ClassifyProductInterface{
    return new ClassifyProductB();
  }
}
