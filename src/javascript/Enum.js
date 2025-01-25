"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3
Directions[0]; // "Up"
Directions[1]; // "Down"
Directions[2]; // "Left"
Directions[3]; // "Right"
/* -------------------------------------------- */
var Direction_2;
(function (Direction_2) {
    Direction_2[Direction_2["Up"] = 2] = "Up";
    Direction_2[Direction_2["Down"] = 5] = "Down";
    Direction_2[Direction_2["Left"] = 10] = "Left";
    Direction_2[Direction_2["Right"] = 11] = "Right";
})(Direction_2 || (Direction_2 = {}));
Direction_2.Up; // 2
Direction_2.Down; // 5
Direction_2.Left; // 10
Direction_2.Right; // 11
/* -------------------------------------------- */
var Direction_3;
(function (Direction_3) {
    Direction_3[Direction_3["Up"] = 2] = "Up";
    Direction_3[Direction_3["Down"] = 5] = "Down";
    Direction_3[Direction_3["Left"] = 10] = "Left";
    Direction_3[Direction_3["Right"] = 11] = "Right";
})(Direction_3 || (Direction_3 = {}));
Direction_3.Up; // 2
Direction_3.Down; // 5
Direction_3[10]; // "Left"
Direction_3[11]; // "Right"
/* -------------------------------------------- */
// ПРИМЕРЫ:
var links;
(function (links) {
    links["youtube"] = "https://www.youtube.com/";
    links["vk"] = "https://vk.com/";
    links["github"] = "https://github.com/";
})(links || (links = {}));
links.vk; // 'https://vk.com/'
links.github; // 'https://github.com/'
const arrLinks = ["https://vk.com/" /* links_3.vk */, "https://github.com/" /* links_3.github */];
// при таком обращении к свойствам, enum так же скомпилирован не будет
// скомпилируется только массив
// ["https://vk.com/" /* links_3.vk */, "https://github.com/" /* links_3.github */]
