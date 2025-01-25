/* -------------------------------------------- */
// Декоратор класса

const logClass = (constructor: Function) => {
  console.log(constructor);
};

@logClass
class User_1 {
  constructor(public name: string, public age: number) {}

  public getPass(): string {
    return 'Good shiiit';
  }
}

/* -------------------------------------------- */
// Декоратор свойства
