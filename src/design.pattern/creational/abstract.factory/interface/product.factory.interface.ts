import { ClassifyProductInterface } from './classify.product.interface';
import { ModernProductInterface } from './modern.product.interface';

export interface ProductFactoryInterface {
  createModernProduct(): ModernProductInterface;

  createClassifyProduct(): ClassifyProductInterface;
}
