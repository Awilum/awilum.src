---
title: Преобразование символа в ASCII и обратно в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-29
description: Преобразование символа в ASCII и обратно в JavaScript
keywords: javascript
---

**JavaScript** предоставляет различные методы для работы с символами и их **ASCII**-кодами. **ASCII** **(American Standard Code for Information Interchange)** - это стандартный набор символов и их соответствующих числовых значений, используемых для представления текста на компьютере.

### Преобразование символа в ASCII

Для преобразования символа в его **ASCII**-код в **JavaScript** используется метод `charCodeAt()`. Этот метод возвращает числовое значение, представляющее **ASCII**-код указанного символа. 

Вот пример использования:

```javascript
let symbol = 'A';
let asciiCode = symbol.charCodeAt(0);

console.log(asciiCode); // 65
```

В этом примере символ `A` преобразуется в его **ASCII**-код, который равен `65`. Обратите внимание, что `charCodeAt()` принимает индекс символа в строке. Первый символ имеет индекс `0`.

### Преобразование ASCII в символ

Для преобразования числового значения **ASCII** в соответствующий символ в **JavaScript** используется метод `String.fromCharCode()`. Этот метод принимает один или несколько числовых аргументов (кодов **ASCII**) и возвращает строку, составленную из символов, соответствующих указанным кодам **ASCII**. 

Вот пример:

```javascript
let asciiCode = 65;
let symbol = String.fromCharCode(asciiCode);

console.log(symbol); // A
```

В этом примере числовое значение `65` преобразуется в символ `A` с помощью `String.fromCharCode()`.

### Преобразование строки в ASCII и обратно

Давайте рассмотрим пример, в котором мы преобразуем строку в ее **ASCII**-представление, а затем обратно:

```javascript
let inputString = 'Hello';
let asciiRepresentation = [];

// Преобразование строки в ASCII
for (let i = 0; i < inputString.length; i++) {
    asciiRepresentation.push(inputString.charCodeAt(i));
}

console.log('ASCII представление строки:', asciiRepresentation);

// Преобразование ASCII обратно в символы
let reconstructedString = '';
for (let i = 0; i < asciiRepresentation.length; i++) {
    reconstructedString += String.fromCharCode(asciiRepresentation[i]);
}

console.log('Восстановленная строка:', reconstructedString);

// ASCII представление строки: [ 72, 101, 108, 108, 111 ]
// Восстановленная строка: Hello
```

В этом примере мы сначала преобразуем строку `Hello` в ее **ASCII**-представление массива чисел. Затем мы преобразуем массив **ASCII** обратно в строку. Результаты вывода в консоль покажут нам исходную строку и ее восстановленное представление.

