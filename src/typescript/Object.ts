/* -------------------------------------------- */
// Определение интерфейса:

const user1: { name: string; age: number } = {
  name: 'Boba',
  age: 30,
};

/* -------------------------------------------- */
// Добавление свойств
// Используем ?:

const user2: { name: string; age: number; admin?: boolean } = {
  name: 'Boba',
  age: 30,
};

user2.admin = true;
// но есть вероятность получения неожиданного результата

/* -------------------------------------------- */
// Расширение типов

type Person = { name: string; age: number; admin: boolean };

// Через объединение
type Admin = Person & { admin: boolean };
type User = Person & { nickName: string; weight: number };

// Через интерефейсы путем наследования
interface User2 extends Person {
  nickname: string;
}

interface Admin2 extends Person {
  admin: boolean;
}
