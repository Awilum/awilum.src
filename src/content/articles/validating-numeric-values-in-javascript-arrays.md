---
title: Проверка числовых значений в массивах JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-30
description: Проверка числовых значений в массивах JavaScript
keywords: javascript
---

В **JavaScript**, как и во многих других языках программирования, массивы могут содержать элементы различных типов данных, включая числа, строки, объекты и другие массивы. Иногда возникает необходимость убедиться, что все элементы в массиве являются числовыми значениями. Это может быть полезно, например, при работе с данными, предполагающими только числовые значения, такими как математические операции или статистические вычисления.

### Проверка с помощью цикла и `typeof`

Один из наиболее распространенных способов проверки типа элементов массива - использование цикла в сочетании с оператором `typeof`. Этот способ позволяет пройти по всем элементам массива и проверить их тип.

```javascript
function areAllNumeric(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 'two', 3, 'four', 5];

console.log(areAllNumeric(array1)); // true
console.log(areAllNumeric(array2)); // false
```

### Проверка с помощью метода `every()`

Метод `every()` массива позволяет проверить, удовлетворяют ли все элементы массива заданному условию, представленному в виде функции обратного вызова.

```javascript
function isNumeric(value) {
    return typeof value === 'number';
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 'two', 3, 'four', 5];

console.log(array1.every(isNumeric)); // true
console.log(array2.every(isNumeric)); // false
```

### Использование метода `every()` вместе с `isNaN()`

Метод `isNaN()` используется для проверки, является ли переданное значение **NaN** (не числом). В комбинации с методом `every()` он может быть использован для проверки всех элементов массива на числовые значения.

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 'two', 3, 'four', 5];

console.log(array1.every(value => !isNaN(value))); // true
console.log(array2.every(value => !isNaN(value))); // false
```