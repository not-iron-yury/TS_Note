"use strict";
// Array
// Хранит только один тип данных.
// Может менять длинну и порядок элементов.
const list_1 = [1, 2, 3];
const list_2 = [1, 2, 3]; // generic type
/* -------------------------------------------- */
// Tuple
// Фиксированная длинна и фиксированный порядок типов.
let x; // multiple lines
x = ['Ass', 90]; // инициализация значения сразу же после декларирования кортежа!
const y = ['Ass', 90]; // one lines
/* -------------------------------------------- */
// Enum
// Набор именованных числовых констант.
// Помогает структурировать однотипные элементы.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
Direction.Up; // 0
Direction.Down; // 1
Direction.Left; // 2
Direction.Right; // 3
/* -------------------------------------------- */
// Object
// используется для определения объекта или непримитива
const create = (o) => {
    console.log(o);
};
create({ obj: 1 });
create(null);
// create(1);       не сработает
// create('Ass');   не сработает
/* -------------------------------------------- */
// Any
// использовать только в крайних случаях
const any_1 = ['Ass', 90]; // array
const any_2 = [90, 'Ass']; // array
let notSure = false; // boolean
notSure = true; // boolean
notSure = 90; // number
notSure = 'Ass'; // string
let userId; // декларирование кастомного типа
userId = '90';
userId = 10;
