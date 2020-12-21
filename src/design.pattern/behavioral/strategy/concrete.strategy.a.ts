import { StrategyInterface } from './strategy.interface';

export class ConcreteStrategyA implements StrategyInterface {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
