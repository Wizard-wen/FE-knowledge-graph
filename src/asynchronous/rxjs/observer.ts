import { Observable } from 'rxjs';
import type { Subscriber } from 'rxjs';

const observable = new Observable((subscriber: Subscriber<number>) => {
  console.log(this);
  subscriber.next(111);
});
const observer = {
  next: (x: number) => console.log(`Observer got a next value: ${x}`),
  error: (error: any) => console.error(`Observer got an error: ${error}`),
  complete: () => console.log('Observer got a complete notification')
};
observable.subscribe(observer);
