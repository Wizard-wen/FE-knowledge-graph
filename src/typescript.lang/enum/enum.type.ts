export enum TestEnum {
  One = 1,
  Two = 2
}


export function test(param1: TestEnum): number {
  return param1 + 1;
}
