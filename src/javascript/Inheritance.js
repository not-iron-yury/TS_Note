"use strict";
/* -------------------------------------------- */
// Статические свойства
class Man {
    name;
    age;
    static secret = 123; // static prop
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get pass() {
        return this.name + Man.secret; // обращение внутри класса
    }
}
Man.secret; // обращение снаружи
const userMan = new Man('boba', 30);
userMan.pass; // boba123
/* -------------------------------------------- */
// Абстрактные классы
class absUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(this.name);
    }
}
// Абстрактные классы - это базовые классы от которых наследуются другие классы.
// Особенности:
// 1. Абстрактный класс содержит детали реализации своих свойств и методов.
// 2. Нельзя создать экземпляр абстрактного класса. Только для наследования.
/* -------------------------------------------- */
// Наследование
