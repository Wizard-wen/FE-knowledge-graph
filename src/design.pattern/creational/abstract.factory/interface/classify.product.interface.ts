import { ModernProductInterface } from './modern.product.interface';

export interface ClassifyProductInterface {
  showClassifyProduct(): string;

  getModernProductThenShow(collaborator: ModernProductInterface): string;
}
