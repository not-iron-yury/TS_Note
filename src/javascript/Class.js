"use strict";
/* -------------------------------------------- */
// Определение интерфейса:
class Human {
    name;
    age;
    niceass;
    constructor(name, age, niceass) {
        this.name = name;
        this.age = age;
        this.niceass = niceass;
    }
}
const boba = new Human('Boba', 30, true);
/* -------------------------------------------- */
// Модификаторы доступа: public, private, protected, readonly
class Human2 {
    name;
    age;
    niceass;
    weight;
    constructor(name, age, niceass, weight) {
        this.name = name;
        this.age = age;
        this.niceass = niceass;
        this.weight = weight;
    }
}
const joba = new Human2('Joba', 28, false, 50);
joba.name; // 'Joba'
//joba.age;           // is private     доступно только в внтури класса
//joba.niceass;       // is protected   досупно только в внутри класса и для субклассов (наследников)
//joba.weight = 55;   // is read-only property
/* -------------------------------------------- */
// Значения по умолчанию
class Human3 {
    name = 'Anonimus';
    age = 18;
    niceass = false;
}
/* -------------------------------------------- */
// Сокращенная запись
class Human4 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// типизация сразу в конструкторе
// тело конструктора прописывать не нужно, при компиляции все будет на месте
// обязательно указываем модификаторы доступа, в .т.ч. public
/* -------------------------------------------- */
// Accessors: геттеры и сеттеры
class Human5 {
    name;
    age = 30;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get myAge() {
        return this.age;
    }
    set myAge(age) {
        this.age = age;
    }
}
const boba2 = new Human5('Boba');
boba2.myAge; // 30
boba2.myAge = 50;
boba2.myAge; // 50
