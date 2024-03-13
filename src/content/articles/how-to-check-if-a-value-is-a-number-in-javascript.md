---
title: Как проверить, является ли значение числом в JavaScript?
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-01-10
description: Как проверить, является ли значение числом в JavaScript?
keywords: javascript, number, NaN
---

В JavaScript существует несколько способов проверки, является ли значение числом. 

### Использование `typeof`

Самый простой и быстрый способ проверки типа значения в JavaScript - использовать оператор `typeof`. Он возвращает строку, представляющую тип операнда.

```javascript
let value = 42;

if (typeof value === 'number') {
    console.log('Значение является числом');
} else {
    console.log('Значение не является числом');
}

// Значение является числом
```

### Использование `isNaN()`

Функция `isNaN()` используется для проверки того, является ли значение `NaN` (Not a Number). Однако, она также может быть использована для определения, является ли значение числом.

```javascript
let value = 42;

if (!isNaN(value)) {
    console.log('Значение является числом');
} else {
    console.log('Значение не является числом');
}

// Значение является числом
```

Этот метод может быть использован для чисел, но имейте в виду, что он вернет `true` для значений, которые могут быть преобразованы в числа. 

Вот еще несколько примеров того как работает функция `isNaN()` с различными входным значениями:
```javascript
console.log(!isNaN(42))      // true
console.log(!isNaN("42"))    // true
console.log(!isNaN("Hello")) // false
console.log(!isNaN({}))      // false
console.log(!isNaN([]))      // true
console.log(!isNaN(""))      // true
console.log(!isNaN(1.2))     // true
```
