// interface описывает форму(структуру) объекта или класса
// Поддерживает наследование от других интерфейсов и возможность частичного определения свойств

/* -------------------------------------------- */
// Определение интерфейса:

interface IPerson1 {
  name: string;
  readonly age: number; // свойство заблокированно для изменения
}

/* -------------------------------------------- */
// Частичное определение

interface IPerson2 {
  name: string;
  age?: number; // опциональное свойство
}

/* -------------------------------------------- */
// Фиксированные свойства и не фиксированные

interface IUser {
  name: string;
  age: number;
  [propName: string]: any; // позволяет добавлять любые свойства
}

const doba: IUser = {
  name: 'Doba',
  age: 28,

  nickName: 'genius',
  niceass: false,
};

/* -------------------------------------------- */
// Имплементация

interface Users {
  // name: string;
  // age: number;
}
interface Admins {
  // admin: boolean;
  // get pass(): string;
}

class Persons implements Users {
  //...
}
class MegaPersons implements Users, Admins {
  //...
}

/* -------------------------------------------- */
// Наследование интерфейсов

interface Users {
  // name: string;
  // age: number;
}
interface Admins extends Users {
  // admin: boolean;
  // get pass(): string;
}

class MegaPerson implements Admins {
  //...
}
