---
title: Выбор нескольких случайных элементов массива в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-10
description: Выбор нескольких случайных элементов массива в JavaScript
keywords: javascript
---

В JavaScript есть несколько способов выбрать несколько случайных элементов из массива. 

### Использование `Math.random()` и `slice()`

```javascript
function getRandomElementsFromArray(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberOfRandomElements = 3;

const randomElements = getRandomElementsFromArray(myArray, numberOfRandomElements);
console.log(randomElements);
```

Этот код сначала перемешивает массив, используя `sort()` с функцией сравнения, основанной на `Math.random()`, затем использует `slice()` для выбора указанного количества элементов из перемешанного массива.

### Использование цикла

```javascript
function getRandomElementsFromArray(arr, count) {
    const result = [];
    const arrayCopy = arr.slice(0);
    const length = arrayCopy.length;
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * (length - i));
        result.push(arrayCopy[randomIndex]);
        arrayCopy[randomIndex] = arrayCopy[length - i - 1];
    }
    return result;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberOfRandomElements = 3;

const randomElements = getRandomElementsFromArray(myArray, numberOfRandomElements);
console.log(randomElements);
```

Этот код использует цикл для выбора случайного элемента из массива и добавления его в новый массив. Каждый выбранный элемент удаляется из копии исходного массива, чтобы избежать повторений.