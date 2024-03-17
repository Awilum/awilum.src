---
title: Как работает функция parseInt() в JavaScript?
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-15
description: Как работает функция parseInt() в JavaScript?
keywords: javascript
---

`parseInt()` - это функция в JavaScript, которая используется для парсинга строки и возвращения целого числа. 

### Параметры функции

`string` (обязательный параметр)  
Строка, которую вы хотите преобразовать в целое число.
  
`radix` (необязательный параметр)  
Определяет основание системы счисления.   
Этот параметр может быть числом от 2 до 36.   
Если он не указан, то по умолчанию используется десятичная система счисления.

### Процесс парсинга

1. Функция начинает считывать строку слева направо.
2. Если первый символ строки не является допустимым символом числа (например, символы, не относящиеся к числам или пробелы), они игнорируются, и функция продолжает чтение строки до тех пор, пока не встретит допустимый символ или числовую цифру.
3. Как только встречается допустимый символ или цифра, начинается процесс преобразования этой части строки в число.
4. Функция продолжает чтение строки до тех пор, пока не достигнет конца строки или не встретит символ, который не является частью числа в указанной системе счисления.
5. Если `radix` указан, то `parseInt()` считает, что строка представляет собой число в этой системе счисления. Например, если `radix` равен `16`, функция ожидает, что строка представляет собой шестнадцатеричное число.

### Возвращаемое значение

- `parseInt()` возвращает целое число, полученное из строки. Если первый символ строки не является цифрой или знаком минус, `parseInt()` вернет NaN (Not a Number).
- Если `radix` не определен или равен `0`, и первый символ строки (после игнорирования всех пробелов) является "0", то **JavaScript** предполагает, что число восьмеричное. Если первый символ не "0", функция предполагает, что число десятичное.

### Пример использования

```javascript
// 10
console.log(parseInt("10"));   

// 16 (преобразует строку "10" из шестнадцатеричной системы счисления в десятичное число)
console.log(parseInt("10", 16));

// NaN (поскольку "H" не является цифрой)
console.log(parseInt("Hello"));

// 11 (поскольку "11" - это первая часть строки, которая может быть преобразована в число)
console.log(parseInt("11cats"));
```