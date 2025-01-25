/* -------------------------------------------- */
// Статические свойства

class Man {
  static secret: number = 123; // static prop

  constructor(public name: string, public age: number) {}

  get pass() {
    return this.name + Man.secret; // обращение внутри класса
  }
}

Man.secret; // обращение снаружи

const userMan = new Man('boba', 30);
userMan.pass; // boba123

/* -------------------------------------------- */
// Абстрактные классы

abstract class absUser {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(this.name);
  }

  abstract getPass(): string; // абстрактный метод, должен быть описан в потомке и обязательно возвращать string
}

// Абстрактные классы - это базовые классы от которых наследуются другие классы.
// Особенности:
// 1. Абстрактный класс содержит детали реализации своих свойств и методов.
// 2. Нельзя создать экземпляр абстрактного класса. Только для наследования.

/* -------------------------------------------- */
// Наследование
