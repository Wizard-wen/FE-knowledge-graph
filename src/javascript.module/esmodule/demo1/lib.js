// lib.mjs
// ESLint: Exporting mutable 'let' binding, use 'const' instead.(import/no-mutable-exports)
export let counter = 3;

export function incCounter() {
  counter += 1;
}
