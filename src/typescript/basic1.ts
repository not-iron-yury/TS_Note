/* Базовые типы. Примитивы. */

// Boolean
const age: boolean = true;

// Number
const decimal: number = 5;
const integer: number = 5.45;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const nan: number = NaN;
const infinity: number = Infinity;

// String
const firstname: string = 'Boba';
const greeting: string = `Hello, ${firstname}!`;

// Null & Undefined
const n: null = null;
const u: undefined = undefined;

// Union
let id: number | string; // число или строка

id = 10;
id = 'Ass';
// id = true;   // не сработает
