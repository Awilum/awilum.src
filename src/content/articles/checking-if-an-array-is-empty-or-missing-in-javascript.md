---
title: Проверка на пустоту или отсутствие массива в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-09
description: Проверка на пустоту или отсутствие массива в JavaScript
keywords: javascript
---

В **JavaScript** проверка на пустоту или отсутствие массива может быть выполнена различными способами в зависимости от вашей точки зрения на "пустоту" и "отсутствие". 

Давайте рассмотрим несколько вариантов.

### Проверка на пустоту

Если под "пустотой" массива - это отсутствие элементов в нем, вы можете проверить его длину.

```javascript
let arr = []; // пустой массив

if (arr.length === 0) {
    console.log("Массив пуст");
} else {
    console.log("Массив не пуст");
}
```

В этом случае мы используем свойство `length` массива, чтобы определить, сколько элементов в нем содержится. Если длина равна 0, то массив считается пустым.

### Проверка на отсутствие массива

Cпособ проверки на отсутствие массива - использовать метод `Array.isArray()`.

```javascript
let arr; // массив не определен

if (Array.isArray(arr)) {
    console.log("Это массив");
} else {
    console.log("Это не массив или массив отсутствует");
}
```

Этот метод проверяет, является ли переданный объект массивом. Если переданный объект является массивом, метод вернет `true`, в противном случае `false`.