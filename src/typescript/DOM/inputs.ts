/* -------------------------------------------- */
// доступ к простым элементам

const text: string = 'hello word!';
document.querySelector('.out-1').textContent = text;

// текст из элемента
const div2: string = document.querySelector('.out-2').textContent;

const div3: number = +document.querySelector('.out-3').textContent;

// <HTMLInputElement> здесь — это тип данных, используемый для явного указания того, что
// результат работы функции querySelector() будет интерпретироваться как элемент ввода.

/* -------------------------------------------- */
// HTMLInputElement

const input1 = (<HTMLInputElement>document.querySelector('.input')).value;
// console.log(input1);

const input2 = <HTMLInputElement>document.querySelector('.input');
// console.log(input2.value);

const chekbox1 = document.querySelector('#checkbox1') as HTMLInputElement;
// console.log(chekbox1.checked);

const chekbox2 = (document.querySelector('#checkbox1') as HTMLInputElement).checked;
// console.log(chekbox2);

const radioBtn1 = document.querySelector("input[name='radio']:checked");
// console.log((<HTMLInputElement>radioBtn1).value);
// console.log((radioBtn1 as HTMLInputElement).value);

/* -------------------------------------------- */
// <HTMLSelectElement>

const select1 = <HTMLSelectElement>document.querySelector('#select');
// console.log(select1.value);

const select2 = (document.querySelector('#select') as HTMLSelectElement).value;
// console.log(select2);

/* -------------------------------------------- */
// Отсутствующий html элемент

const elemNull = document.querySelector('.someselector') as HTMLInputElement;
console.log(elemNull); // null
// elemNull.value      // TypeError: Cannot read properties of null (reading 'value')

//
// Вариант проверки 1
console.log(elemNull?.value); // опциональная цепочка

// Вариант проверки 2
if (elemNull !== null) {
  console.log(elemNull);
}
