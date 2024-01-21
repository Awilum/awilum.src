---
title: Поиск символа в строке JavaScript
layout: ../../layouts/NoteEntry.astro
categories: [javascript]
pubDate: 2024-01-02
description: Методы поиска символа в строке JavaScript
keywords: javascript, поиск символа, поиск символа в строке, search, indexOf, includes
---

Если нужно найти символ в строке на JavaScript, можно воспользоваться одним из следующих методов.

### Метод `indexOf()`

Метод `indexOf()` возвращает индекс (позицию) первого вхождения указанного символа или подстроки в строке. Если символ не найден, возвращается -1.

```javascript
let myString = "Hello, World!";
let charToFind = "W";
let indexOfChar = myString.indexOf(charToFind);

if (indexOfChar !== -1) {
  console.log(`Символ "${charToFind}" найден на позиции ${indexOfChar}.`);
} else {
  console.log(`Символ "${charToFind}" не найден в строке.`);
}

// Символ "W" найден на позиции 7.
```

### Метод `includes()`

Метод `includes()` возвращает true, если указанный символ или подстрока присутствует в строке, и false в противном случае.


```javascript
let myString = "Hello, World!";
let charToFind = "W";

if (myString.includes(charToFind)) {
  console.log(`Символ "${charToFind}" найден в строке.`);
} else {
  console.log(`Символ "${charToFind}" не найден в строке.`);
}

// Символ "W" найден в строке.
```

### Метод `search()`

Метод `search()` возвращает индекс первого вхождения указанного символа или подстроки в строке. Если символ не найден, возвращается -1. В отличие от `indexOf()`, `search()` может принимать регулярные выражения.


```javascript
let myString = "Hello, World!";
let charToFind = /W/;
let indexOfChar = myString.search(charToFind);

if (indexOfChar !== -1) {
  console.log(`Символ "${charToFind.source}" найден на позиции ${indexOfChar}.`);
} else {
  console.log(`Символ "${charToFind.source}" не найден в строке.`);
}

// Символ "W" найден в строке.
```
Мы используем `.source` для получения строкового представления регулярного выражения без слешей. 