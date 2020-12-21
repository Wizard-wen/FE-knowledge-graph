/**
 *
 */

import { StrategyInterface } from './strategy.interface';

export class Context {
  private strategy: StrategyInterface;

  constructor(strategy: StrategyInterface) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: StrategyInterface) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd']);
    console.log(result.join(','));
  }
}
