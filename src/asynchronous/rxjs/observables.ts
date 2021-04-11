import { Observable, from, of } from 'rxjs';

// const observable = Observable.create(observer => {
//   const id = setInterval(() => {
//     observer.next('hi');
//   }, 1000);
// });
// observable 可观察的
// observer 观察者
// subscriber 订阅者
const observable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});

// observable.subscribe((x) => console.log(x));

const subscription = observable.subscribe({
  next(x) {
    console.log(x);
  },
  error(error) {
    console.log(error);
  },
  complete() {
  }
});
subscription.unsubscribe();

const input = from([1, 2, 3, 4]);

const ob = new Observable((subscriber) => {
  input.subscribe({
    next() {
      subscriber.next();
    }
  });
})
