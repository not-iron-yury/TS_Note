/* -------------------------------------------- */

// Дженерики в функциях

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('myString'); // Type is 'string'
let output2 = identity(123); // Type is 'number'

// <T> обозначает тип-параметр, который можно использовать в функции.
// Тип аргумента и возвращаемого значения привязаны к одному типу.

/* -------------------------------------------- */

// Дженерики в классах

class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
const poppedItem = numberStack.pop(); // Type is 'number | undefined'

// Класс Stack может работать с любым типом данных, что определяется при создании экземпляра.

/* -------------------------------------------- */

// Дженерики в интерфейсах

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let pair: KeyValuePair<number, string> = { key: 1, value: 'value' }; // Интерфейс KeyValuePair определяет два типа: ключ и значение.

/* -------------------------------------------- */

// Дженерики в типах
// Можно использовать дженерики для создания новых типов:

type MyType<T> = { value: T };

let X: MyType<string> = { value: 'hello' };
let Y: MyType<number> = { value: 42 };

// MyType определяет новый тип с одним свойством value, тип которого определяется при использовании.

/* -------------------------------------------- */

// Дженерики в условных типах
// Условные типы позволяют возвращать разные типы в зависимости от условий:

type IfString<T> = T extends string ? string : never;

// Условный тип IfString возвращает string, если T является строкой, иначе never.

type Result1 = IfString<string>; // Type is 'string'
type Result2 = IfString<number>; // Type is 'never'

/* -------------------------------------------- */

// Ограничение типов
// Можно ограничивать типы, которые могут быть использованы в дженерике:

function loggingIdentity<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// T extends { length: number } ограничивает тип T объектами, у которых есть свойство length.

loggingIdentity([1, 2, 3]); // у array есть свойство length
loggingIdentity(123); // у number нет свойства length

/* -------------------------------------------- */

// Ограничение типов свойств
// Можно ограничивать типы ключей объекта

function getPropValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

getPropValue(myObj, 'b'); // ok, свойство "b" есть в myObj
getPropValue(myObj, 'f'); // not ok, свойства "f" нет в myObj
