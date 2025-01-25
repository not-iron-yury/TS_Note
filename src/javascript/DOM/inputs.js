"use strict";
/* -------------------------------------------- */
// доступ к простым элементам
const text = 'hello word!';
document.querySelector('.out-1').textContent = text;
// текст из элемента
const div2 = document.querySelector('.out-2').textContent;
const div3 = +document.querySelector('.out-3').textContent;
// <HTMLInputElement> здесь — это тип данных, используемый для явного указания того, что
// результат работы функции querySelector() будет интерпретироваться как элемент ввода.
/* -------------------------------------------- */
// HTMLInputElement
const input1 = document.querySelector('.input').value;
// console.log(input1);
const input2 = document.querySelector('.input');
// console.log(input2.value);
const chekbox1 = document.querySelector('#checkbox1');
// console.log(chekbox1.checked);
const chekbox2 = document.querySelector('#checkbox1').checked;
// console.log(chekbox2);
const radioBtn1 = document.querySelector("input[name='radio']:checked");
// console.log((<HTMLInputElement>radioBtn1).value);
// console.log((radioBtn1 as HTMLInputElement).value);
/* -------------------------------------------- */
// <HTMLSelectElement>
const select1 = document.querySelector('#select');
// console.log(select1.value);
const select2 = document.querySelector('#select').value;
// console.log(select2);
/* -------------------------------------------- */
// Отсутствующий html элемент
const elemNull = document.querySelector('.someselector');
console.log(elemNull); // null
// elemNull.value      // TypeError: Cannot read properties of null (reading 'value')
// Вариант проверки 1
console.log(elemNull?.value); // опциональная цепочка
// Вариант проверки 2
if (elemNull !== null) {
    console.log(elemNull);
}
