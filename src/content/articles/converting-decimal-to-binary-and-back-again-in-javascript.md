---
title: Конвертация десятичного числа в двоичное и обратно в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-10
description: Конвертация десятичного числа в двоичное и обратно в JavaScript
keywords: javascript
---

Конвертация чисел из десятичной системы счисления в двоичную и обратно — это простая операция в **JavaScript**. В процессе разработки приложений и алгоритмов часто возникает необходимость работать с числами в различных системах счисления. Десятичная система является наиболее распространённой и естественной для человека, но для многих задач удобнее использовать двоичную систему, особенно в контексте работы с битами и бинарными данными. Поэтому умение эффективно конвертировать числа между этими двумя системами является важным навыком для программиста. В JavaScript для этого имеются удобные методы и функции, которые облегчают этот процесс.

**Двоичная система счисления (или база 2)** — это система счисления, которая использует только две цифры: 0 и 1. В этой системе каждая цифра называется битом (от англ. binary digit). По мере увеличения разрядности числа в двоичной системе, каждый бит в числе обозначает удвоение предыдущего разряда. Например, в числе 1010 каждая цифра представляет собой 2 в степени разряда, начиная справа: 

`0*2^0 + 1*2^1 + 0*2^2 + 1*2^3 = 0 + 2 + 0 + 8 = 10`

**Десятичная система счисления (или база 10)** — это наиболее распространённая система счисления, которая использует десять цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8 и 9. В этой системе каждая цифра представляет собой количество единиц, десятков, сотен и так далее, в зависимости от их позиции в числе. Например, число 532 в десятичной системе можно представить как: 

`5*10^2 + 3*10^1 + 2*10^0 = 500 + 30 + 2 = 532`

<br>

Обе системы являются основополагающими для различных областей информатики и математики и используются в широком спектре приложений, включая программирование, цифровую электронику, криптографию и многие другие.

### Конвертация из десятичного в двоичное число

```javascript
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Пример использования:
console.log(decimalToBinary(10)); // 1010
```

Функция `decimalToBinary` принимает десятичное число в качестве входного параметра и использует `toString(2)` для преобразования его в двоичное число. Оператор `>>>` используется для преобразования числа в беззнаковое целое число (так как в `JavaScript` числа хранятся со знаком по умолчанию), что позволяет избежать нежелательного добавления отрицательного знака к двоичному представлению положительных чисел.

### Конвертация из двоичного в десятичное число

```javascript
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Пример использования:
console.log(binaryToDecimal("1010")); // 10
```

Функция `binaryToDecimal` принимает двоичное число в виде строки и использует `parseInt(binary, 2)` для преобразования его в десятичное число. Второй параметр 2 указывает, что мы конвертируем из двоичной системы.
