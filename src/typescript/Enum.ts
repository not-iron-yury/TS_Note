enum Directions {
  Up,
  Down,
  Left,
  Right,
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

Directions[0]; // "Up"
Directions[1]; // "Down"
Directions[2]; // "Left"
Directions[3]; // "Right"

/* -------------------------------------------- */

enum Direction_2 {
  Up = 2,
  Down = 5,
  Left = 10,
  Right,
}

Direction_2.Up; // 2
Direction_2.Down; // 5
Direction_2.Left; // 10
Direction_2.Right; // 11

/* -------------------------------------------- */

enum Direction_3 {
  Up = 2,
  Down = 5,
  Left = 10,
  Right = 11,
}

Direction_3.Up; // 2
Direction_3.Down; // 5
Direction_3[10]; // "Left"
Direction_3[11]; // "Right"

/* -------------------------------------------- */
// ПРИМЕР

enum links {
  youtube = 'https://www.youtube.com/',
  vk = 'https://vk.com/',
  github = 'https://github.com/',
}

links.vk; // 'https://vk.com/'
links.github; // 'https://github.com/'

/* -------------------------------------------- */
// ЕЩЕ ПРИМЕР

enum Roles {
  ADMIN,
  GUEST,
  USER,
}

interface UserR {
  role: Roles;
}

const userR: UserR = {
  role: Roles.ADMIN,
};

/* -------------------------------------------- */
// ENUM CONST

const enum links_2 {
  github = 'https://github.com/',
}

// links.github

// добавление const оптимизирует выходной js
// если нет обращений к свойствам enum, то он не будет компилироваться в js
// enum links_2 скомпилирован не будет

/* ---------------------- */

const enum links_3 {
  vk = 'https://vk.com/',
  github = 'https://github.com/',
}

const arrLinks = [links_3.vk, links_3.github];

// при таком обращении к свойствам, enum так же скомпилирован не будет
// скомпилируется только массив
// ["https://vk.com/" /* links_3.vk */, "https://github.com/" /* links_3.github */]

/* -------------------------------------------- */
