let symbol = Symbol('mine');

let symbol2 = Symbol.for('mine'); // global registry
let symbol3 = Symbol.for('mine');

console.log(symbol === symbol2);
console.log(symbol3 === symbol2);
console.log(symbol3);