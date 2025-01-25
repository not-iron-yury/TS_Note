/*
Utility types (или служебные типы) в TypeScript предоставляют удобные способы для
преобразования и манипуляции типами без необходимости писать много повторяющегося кода.
Они позволяют легко изменять существующие типы данных, добавляя к ним новые свойства или изменяя их поведение.
*/

/* -------------------------------------------- */
// Partial<T>
// Делает все поля объекта типа T необязательными.

interface Human {
  name: string;
  age: number;
  address: string;
}

type OptionalPerson = Partial<Human>;

/* -------------------------------------------- */
// Required<T>
// Делает все поля объекта обязательными, даже если они были объявлены как опциональные.

interface Human2 {
  id: number;
  email?: string; // Поле email опциональное
}

type RequiredUser = Required<Human2>;

/* -------------------------------------------- */
// Readonly<T>
// Делает все поля объекта только для чтения

interface Config {
  host: string;
  port: number;
}

const config: Readonly<Config> = {
  host: 'localhost',
  port: 8080,
};

// config.host = "example.com"; // Ошибка компиляции, так как свойство host теперь только для чтения

/* -------------------------------------------- */
// Pick<T, K>
// Позволяет выбрать подмножество полей из существующего типа.

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

type ProductSummary = Pick<Product, 'id' | 'title'>; // только поля id и title из исходного типа Product.

/* -------------------------------------------- */
// Omit<T, K>
// Удаляет указанные поля из типа.

interface Employee {
  name: string;
  salary: number;
  department: string;
}

type PublicEmployeeInfo = Omit<Employee, 'salary'>; // все поля типа Employee, кроме поля salary.

/* -------------------------------------------- */
// Record<K, T>
// Создает объект с ключами типа K и значениями типа T.

type MyRecord = Record<'a' | 'b', boolean>;

// Объект типа MyRecord может выглядеть следующим образом: { a: true, b: false }.

/* -------------------------------------------- */
// Exclude<T, U>
// Исключает из типа T элементы, которые могут быть присвоены типу U.

type NumberOrString = number | string;
type OnlyStrings = Exclude<NumberOrString, number>; // будет содержать только строки, исключая числа.

/* -------------------------------------------- */
// Extract<T, U>
// Извлекает из типа T элементы, которые могут быть присвоены типу U.

type NumberOrString2 = number | string;
type OnlyNumbers = Extract<NumberOrString2, number>; // будет содержать только числа, исключая строки.

/* -------------------------------------------- */
// NonNullable<T>
// Убирает из типа T значения null и undefined.

type MaybeString = string | null | undefined;
type Strings = NonNullable<MaybeString>; // будет содержать только строки, исключив null и undefined.

/* -------------------------------------------- */
// ReturnType<F>
// Возвращает тип возвращаемого значения функции F.

function greet(name: string): string {
  return `Hello, ${name}`;
}

type Greeting = ReturnType<typeof greet>; // тип Greeting будет равен string, т.к. функция greet возвращает строку.
