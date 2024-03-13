---
title: Как определить является ли число целым в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-13
description: Как определить является ли число целым в JavaScript
keywords: javascript
---

В **JavaScript** существует несколько способов определить, является ли число целым. Один из наиболее простых способов - использовать оператор остатка `%`. Другой - сравнить число с его целой частью. 

Давайте рассмотрим оба способа подробнее.

### Использование оператора остатка `%`

Оператор остатка `%` возвращает остаток от деления одного числа на другое. Если остаток равен нулю, значит, число является целым.

```javascript 
function isInteger(num) {
    return num % 1 === 0;
}

console.log(isInteger(5));    // true
console.log(isInteger(5.5));  // false
console.log(isInteger(-5));   // true
```

### Сравнение числа с его целой частью

Этот метод включает преобразование числа в строку и сравнение его с преобразованной в строку целой частью числа.

```javascript
function isInteger(num) {
    return num === parseInt(num, 10);
}

console.log(isInteger(5));    // true
console.log(isInteger(5.5));  // false
console.log(isInteger(-5));   // true
```

### Использование `Number.isInteger()`

Стандарт **ECMAScript 6 (ES6)** предоставляет встроенный метод `Number.isInteger()`, который возвращает `true`, если значение является целым числом.

```javascript
console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.5));  // false
console.log(Number.isInteger(-5));   // true
```

<br>

Выбор метода зависит от вашего контекста использования. Если вы работаете в среде, поддерживающей **ES6**, то использование `Number.isInteger()` - предпочтительный вариант, так как он более читаем и является встроенным методом. В противном случае, можно использовать один из описанных выше методов.
