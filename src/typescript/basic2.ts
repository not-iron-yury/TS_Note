// Array

// Хранит только один тип данных.
// Может менять длинну и порядок элементов.

const list_1: number[] = [1, 2, 3];
const list_2: Array<number> = [1, 2, 3]; // generic type

/* -------------------------------------------- */

// Tuple

// Фиксированная длинна и фиксированный порядок типов.

let x: [string, number]; // multiple lines
x = ['Ass', 90]; // инициализация значения сразу же после декларирования кортежа!

const y: [string, number] = ['Ass', 90]; // one lines

/* -------------------------------------------- */
// Enum

// Набор именованных числовых констант.
// Помогает структурировать однотипные элементы.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

Direction.Up; // 0
Direction.Down; // 1
Direction.Left; // 2
Direction.Right; // 3

/* -------------------------------------------- */
// Object

// используется для определения объекта или непримитива

const create = (o: object | null): void => {
  console.log(o);
};

create({ obj: 1 });
create(null);
// create(1);       не сработает
// create('Ass');   не сработает

/* -------------------------------------------- */
// Any

// использовать только в крайних случаях

const any_1: [any, any] = ['Ass', 90]; // array
const any_2: Array<any> = [90, 'Ass']; // array

let notSure: any = false; // boolean
notSure = true; // boolean
notSure = 90; // number
notSure = 'Ass'; // string

/* -------------------------------------------- */
// Type

// Позволяет создавать новые имена для существующих типов, объединять их,
// и создавать сложные конструкции с помощью операторов объединения (|) и пересечения (&).
// Используется если требуется работать с различными типами данных или создавать сложные комбинации типов.

// Простой тип:
type MyString = string;

// Объединение типов:
type StringOrNumber = string | number;

let userId: StringOrNumber; // декларирование кастомного типа

userId = '90';
userId = 10;

// Создание сложных типов:
type Pers = {
  name: string;
  age: number;
};

//Расширение существующего типа:
type ExtendedPerson = Pers & { job: string };
