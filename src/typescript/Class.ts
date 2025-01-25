/* -------------------------------------------- */
// Определение интерфейса:

class Human {
  name: string;
  age: number;
  niceass: boolean;

  constructor(name: string, age: number, niceass: boolean) {
    this.name = name;
    this.age = age;
    this.niceass = niceass;
  }
}

const boba = new Human('Boba', 30, true);

/* -------------------------------------------- */
// Модификаторы доступа: public, private, protected, readonly

class Human2 {
  public name: string;
  private age: number;
  protected niceass: boolean;
  readonly weight: number;

  constructor(name: string, age: number, niceass: boolean, weight: number) {
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
  name: string = 'Anonimus';
  age: number = 18;
  niceass: boolean = false;

  // constructor(...) {
  //   ...
  // }
}

/* -------------------------------------------- */
// Сокращенная запись

class Human4 {
  constructor(public name: string, public age: number) {}
}
// типизация сразу в конструкторе
// тело конструктора прописывать не нужно, при компиляции все будет на месте
// обязательно указываем модификаторы доступа, в .т.ч. public

/* -------------------------------------------- */
// Accessors: геттеры и сеттеры

class Human5 {
  private age: number = 30;

  constructor(public name: string) {
    this.name = name;
  }

  get myAge() {
    return this.age;
  }

  set myAge(age: number) {
    this.age = age;
  }
}

const boba2 = new Human5('Boba');

boba2.myAge; // 30
boba2.myAge = 50;
boba2.myAge; // 50
