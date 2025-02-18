/* -------------------------------------------- */
// Определение интерфейса:

const createPassword_1 = (name: string, age: number | string): string => `${name}${age}`;

createPassword_1('Boba', 21);
createPassword_1('Boba', '21');

/* -------------------------------------------- */
// Параметры со значеним по умолчанию

const createPassword_2 = (name: string = 'Anonimus', age: number | string = 30): string => `${name}${age}`;

createPassword_2();

/* -------------------------------------------- */
// Опциональный параметр prop?:

const createPassword_3 = (name: string, age?: number): string => `${name}${age}`;

createPassword_3('Boba');

/* -------------------------------------------- */
// rest оператор в параметрах

const createSkills = (name: string, ...skills: Array<string>): string => `${name}, my skills are ${skills.join()}`;

createSkills('Boba', 'html', 'css', 'js');

/* -------------------------------------------- */
// Возвращаемые типы:

// Number
const funk1 = (): number => 5;

// String
const funk2 = (): string => 'Nice ass!';

// Array
const funk3 = (): Array<string> => ['Nice', 'ass', '!'];
const funk4 = (): string[] => ['Nice', 'ass', '!'];

// Object
const funk5 = (): object => ({ msg: 'Nice ass!' });

// Tuple
const funk6 = (): [string, string, string] => ['Nice', 'ass', '!'];

/* -------------------------------------------- */

// Never
// говорит о том, что результат не будет получен
// Используется только в двух случаях:

// 1. когда функция возвращает ошибку и не заканчивает свое выполнение
const msg = 'Nice ass!';
const error = (msg: string): never => {
  throw new Error(msg);
};

// 2. когда функция постоянно выполянется (бесконечно)
const infiniteloop = (): never => {
  while (true) {}
};
/* -------------------------------------------- */

// Void
// для определения отсутствующих типов
// когда функция является процедурой, и явно ничего не возвращает

const greetUser1 = (): void => {
  console.log('Nice ass!');
};

function greetUser2(): void {
  console.log('Nice ass!');
}

/* -------------------------------------------- */

// Перегрузка функций
// позволяет одной функции обрабатывать разные типы данных или разное количество аргументов

// Пример 1: Разные типы и количество аргументов
function add(a: number, b: number, c: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any, c?: any): any {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add('hello', ' world')); // "hello world"

/* ---------------------- */

// Пример 2: Разные типы и количество аргументов
function getCar(name: string): string;
function getCar(name: string, price: number): string;
function getCar(name: string, price?: number): string {
  return price ? `Название ${name}, цена ${price}` : `Название ${name}`;
}

console.log(getCar('toyota')); // "Название toyota"
console.log(getCar('toyota', 300)); // "Название toyota, цена 300"

/* -------------------------------------------- */
