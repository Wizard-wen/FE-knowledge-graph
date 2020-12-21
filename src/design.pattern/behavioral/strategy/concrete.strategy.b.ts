import { StrategyInterface } from './strategy.interface';

export class ConcreteStrategyB implements StrategyInterface {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
