export function adjust<T extends { data: number }>(list: T[], i: number, n: number) {
  let j: number;
  const temp: T = list[i];
  j = 2 * i;
  while (j <= n) {
    if (j < n && list[j] < list[j + 1]) j += 1;
    if (temp >= list[j]) break;
    list[j / 2] = list[j];
    j *= 2;
  }
  list[j / 2] = temp;
}

export function heapSorting<T extends { data: number }>(list: T[], n: number) {
  let i: number;
  let temp: T;
  for (i = n / 2; i >= 0; i -= 1) {
    adjust(list, i, n);
  }
  for (i = n; i > 0; i -= 1) {
    temp = list[i];
    // eslint-disable-next-line prefer-destructuring
    list[i] = list[0];
    list[0] = temp;
    adjust(list, 0, i);
  }
}
