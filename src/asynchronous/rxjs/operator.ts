import { from, Observable } from 'rxjs';

const input = from([1, 2, 3, 4]);

const ob = new Observable((subscriber) => {
  input.subscribe({
    next(element) {
      subscriber.next(10 * element);
    }
  });
});

ob.subscribe(x => console.log(x));
