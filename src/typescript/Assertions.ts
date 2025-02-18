// Assertions (утверждения)
// способ явно указать тип переменной или выражения
// Assertions полезны, когда вы уверены в типе значения, но компилятору нужна дополнительная информация для проверки.

/* -------------------------------------------- */

// ПРИМЕР 1:
const inputElement = document.querySelector('input');

const value1 = (inputElement as HTMLInputElement).value; // вариант 1

const value2 = (<HTMLInputElement>inputElement).value; // вариант 2 (синтаксис <Тип>, менее предпочтителен)

/* -------------------------------------------- */

// ПРИМЕР 2:
let someValue: any = 'это строка';

let strLength: number = (someValue as string).length;
// явно указываем, что someValue имеет тип string,
// чтобы компилятор позволил нам вызвать метод .length.

/* -------------------------------------------- */
