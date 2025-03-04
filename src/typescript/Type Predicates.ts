/*

Type predicate
Это функция, которая проверяет тип переданного ей аргумента.
Если функция возвращает true, компилятор TypeScript автоматически сужает тип параметра до указанного типа T.

Синтаксис:
  param is T
  param — это параметр функции, T — тип, который мы хотим проверить

Когда применять?
✅ Если работаешь с unknown или any
✅ Если данные приходят с API (неизвестный формат)
✅ Если есть union типы и важно уточнить тип
✅ Если нужно проверить объект перед работой с ним

Когда не стоит использовать?
❌ Когда можно использовать встроенные проверки (typeof, instanceof) без доп. функций.
❌ Если проще использовать type assertion (as) — но это менее безопасно.
❌ Когда код избыточен и увеличивает сложность.

*/

/* -------------------------------------------- */
// Синтаксис

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Здесь value is string — это предикат типа, который говорит TypeScript, что если функция вернула true, то value можно считать string.

/* -------------------------------------------- */

// Проверка примитивных типов

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

const input: unknown = 42;

if (isNumber(input)) {
  console.log(input.toFixed(2)); // TypeScript знает, что это number
}

/* -------------------------------------------- */

// Проверка объектов и интерфейсов

interface User {
  name: string;
  age: number;
}

function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && obj !== null && 'name' in obj && 'age' in obj;
}

const data: unknown = { name: 'Alice', age: 25 };

if (isUser(data)) {
  console.log(data.name); // TypeScript теперь уверен, что это User
}

/* -------------------------------------------- */

// Проверка элементов массива

function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}

const values: unknown = ['apple', 'banana', 'cherry'];

if (isStringArray(values)) {
  console.log(values.map(v => v.toUpperCase())); // Теперь это string[]
}

/* ---------------------- */

// ВАЖНО!
// TypeScript не анализирует логику внутри filter(), map(), reduce() и других методов, возвращающих новый массив

const farr1 = [].filter((product): product is IProduct => product !== null); // тут все ОК. TS будет уверен, что в конечном массиве только объекты типа IProduct
const farr2 = [].filter(product => product !== null); // тут TS игнорирует результат filter, и продолжает считато что в массиве и IProduct, и null

// хоть массив и будет отфильтрован, без предиката дальнейшее взаимодействие с элементами массива будут вызывать ошибку TS
// например при попытке обратиться к свойству одного из отфильтрованных объектов
// farr2[0].id                              вызовет бугурт у TS, т.к. он будет все еще считать, что farr2[0] может оказаться null.
// if (farr2[0] !== null) farr2[0] .id      придется прибегать к проверке типа при каждом обращении

/* -------------------------------------------- */

// Проверка instanceof для классов

class Animal {
  constructor(public name: string) {}
}

function isAnimal(obj: unknown): obj is Animal {
  return obj instanceof Animal;
}

const pet: unknown = new Animal('Dog');

if (isAnimal(pet)) {
  console.log(pet.name); // pet - точно Animal
}

/* -------------------------------------------- */

// Проверка кастомных типов (Union)

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return 'swim' in animal;
}

const pett: Fish | Bird = { swim: () => console.log('Swimming') };

if (isFish(pett)) {
  pett.swim(); //  TypeScript теперь знает, что pet - это Fish
}
