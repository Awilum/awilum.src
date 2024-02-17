---
title: Разница между методом forEach() и map() в JavaScript  
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-01-05
description: Разница между методом forEach() и map() в JavaScript  
keywords: javascript, foreach, map, методы массивов
---

Методы `forEach()` и `map()` являются методами массивов и выполняют итерацию по элементам массива.

Метод `map()` создаёт новый массив с результатом вызова указанной `callback` функции для каждого элемента массива.

Обновление массива позиций игроков:
```javascript
let playerPositions = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 40 }
];

let updatedPositions = playerPositions.map(pos => ({ x: pos.x + 5, y: pos.y + 10 }));

console.log(updatedPositions);

/*

[[object Object] {
  x: 15,
  y: 30
}, [object Object] {
  x: 25,
  y: 40
}, [object Object] {
  x: 35,
  y: 50
}]

*/
```

Метод `forEach()` выполняет `callback` функцию для каждого элемента в массиве.

Обновление позиции каждого юнита-врага в массиве:
```javascript
let enemies = [
  { name: "Гоблин", x: 100, y: 50 },
  { name: "Скелет", x: 200, y: 100 },
  { name: "Орк", x: 300, y: 150 }
];

enemies.forEach(enemy => {
  enemy.x += 10;
  enemy.y += 5;
});

console.log(enemies);

/*
[[object Object] {
  name: "Гоблин",
  x: 110,
  y: 55
}, [object Object] {
  name: "Скелет",
  x: 210,
  y: 105
}, [object Object] {
  name: "Орк",
  x: 310,
  y: 155
}]
*/
```

Основное отличие между `forEach()` и `map()` заключается в том, что `forEach()` используется, когда нужно выполнить действие для каждого элемента массива, в то время как `map()` используется, чтобы создать новый массив, преобразовывая каждый элемент исходного массива.

Пример с `map()`:

```javascript 
let enemies = [
  { name: "Гоблин", x: 100, y: 50 },
  { name: "Скелет", x: 200, y: 100 },
  { name: "Орк", x: 300, y: 150 }
];

let result = enemies.map(pos => ({ x: pos.x + 5, y: pos.y + 10 })).filter(pos => pos.x > 200)

console.log(result);

// [ { x: 205, y: 110 }, { x: 305, y: 160 } ]
```

Пример с `forEach()`:

```javascript
let enemies = [
  { name: "Гоблин", x: 100, y: 50 },
  { name: "Скелет", x: 200, y: 100 },
  { name: "Орк", x: 300, y: 150 }
];

let result = enemies.forEach(pos => ({ x: pos.x + 5, y: pos.y + 10 })).filter(pos => pos.x > 200)

console.log(result);

// TypeError: Cannot read properties of undefined (reading 'filter')
```