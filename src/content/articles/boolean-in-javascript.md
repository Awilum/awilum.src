---
title: Boolean в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-20
description: Boolean в JavaScript
keywords: javascript, boolean
---

**Boolean** в **JavaScript** представляет собой примитивный тип данных `boolean`, который может иметь только два значения: `true` (истина) или `false` (ложь). Кроме того, в **JavaScript** есть объект-обёртка `Boolean`, который оборачивает примитивные значения `true` или `false` и предоставляет дополнительные методы и свойства.

### Создание Boolean

**Boolean** можно создать с помощью ключевых слов `true` и `false`, либо с использованием функции-конструктора `Boolean()`.

```javascript
let bool1 = true;
let bool2 = false;
let bool3 = new Boolean(true); // Создание через объект-обёртку

console.log(bool1); // true
console.log(bool2); // false
console.log(bool3); // [Boolean: true]
```

### Преобразование в Boolean

В **JavaScript** любое значение может быть преобразовано в `Boolean`. Логические значения можно получить, применяя операторы или функции, которые ожидают логические значения.

```javascript
let num = 10;
let boolFromNumber = Boolean(num);     // true, так как num не равен 0
let boolFromString = Boolean("Hello"); // true, так как непустая строка
let boolFromObject = Boolean({});      // true, так как объект существует

console.log(boolFromNumber); // true
console.log(boolFromString); // true
console.log(boolFromObject); // true
```

### Операторы и логические выражения

**JavaScript** предоставляет логические операторы для работы с `Boolean` значениями, такие как `&&` (логическое И), `||` (логическое ИЛИ), и `!` (логическое НЕ).

```javascript
let x = 5;
let y = 10;
let z = 15;

let result = (x < y) && (y < z);

console.log(result); // true
```

### Сравнение с другими типами данных

При сравнении значений разных типов **JavaScript** может преобразовывать их в `Boolean` с помощью абстрактного преобразования к типу `Boolean`. Этот процесс называется "вызовом ToBoolean".

Абстрактная операция `ToBoolean` (к булевому) преобразует свой аргумент к значению типа `Boolean` в соответствии с таблицей ниже: 

<table width="100%">
    <tr>
        <th>Тип аргумента</th>
        <th>Результат</th>
    </tr>
    <tr>
        <td width="300px">Undefined</td>
        <td>false</td>
    </tr>
    <tr>
        <td>Null</td>
        <td>false</td>
    </tr>
    <tr>
        <td>Boolean</td>
        <td>Результат равен входному аргументу (без преобразования).</td>
    </tr>
    <tr>
        <td>Number</td>
        <td>Результат false, если аргумент равен +0, −0 или NaN; в противном случае результат – true.</td>
    </tr>
    <tr>
        <td>String</td>
        <td>Результат false, если аргумент – пустая строка (длина строки равна нулю); в противном случае результат – true.</td>
    </tr>
    <tr>
        <td>Object</td>
        <td>true</td>
    </tr>
</table>

Пример: 

```javascript
console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false
console.log(Boolean("Hello"));   // true
console.log(Boolean(10));        // true
console.log(Boolean({}));        // true
```

### Использование в условных выражениях

`Boolean` значения часто используются в условных выражениях для выполнения различных действий.

```javascript
let condition = true;

if (condition) {
    console.log("Условие истинно");
} else {
    console.log("Условие ложно");
}
```

### Важные моменты

1. При сравнении значений используйте оператор `===` (строгое равенство), так как он сравнивает значения без преобразования типов данных.
2. Примитивные значения `true` и `false` рассматриваются как логические ложь и истину соответственно. Однако любые другие значения рассматриваются как логическая ложь только в случае, если они преобразуются в специальные "ложные" значения (например, 0, null, undefined, NaN, "").