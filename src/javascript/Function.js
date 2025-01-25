"use strict";
/* -------------------------------------------- */
// Определение интерфейса:
const createPassword_1 = (name, age) => `${name}${age}`;
createPassword_1('Boba', 21);
createPassword_1('Boba', '21');
/* -------------------------------------------- */
// Параметры со значеним по умолчанию
const createPassword_2 = (name = 'Anonimus', age = 30) => `${name}${age}`;
createPassword_2();
/* -------------------------------------------- */
// Опциональный параметр prop?:
const createPassword_3 = (name, age) => `${name}${age}`;
createPassword_3('Boba');
/* -------------------------------------------- */
// rest оператор в параметрах
const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
createSkills('Boba', 'html', 'css', 'js');
/* -------------------------------------------- */
// Возвращаемые типы:
// Number
const funk1 = () => 5;
// String
const funk2 = () => 'Nice ass!';
// Array
const funk3 = () => ['Nice', 'ass', '!'];
const funk4 = () => ['Nice', 'ass', '!'];
// Object
const funk5 = () => ({ msg: 'Nice ass!' });
// Tuple
const funk6 = () => ['Nice', 'ass', '!'];
/* -------------------------------------------- */
// Never (говорит о том, что результат не будет получен)
// Используется только в двух случаях:
// 1. когда функция возвращает ошибку и не заканчивает свое выполнение
const msg = 'Nice ass!';
const error = (msg) => {
    throw new Error(msg);
};
// 2. когда функция постоянно выполянется (бесконечно)
const infiniteloop = () => {
    while (true) { }
};
/* -------------------------------------------- */
// Void (для определения отсутствующих типов)
// используется когда функция ничего не возвращает явно
const greetUser1 = () => {
    console.log('Nice ass!');
};
function greetUser2() {
    console.log('Nice ass!');
}
