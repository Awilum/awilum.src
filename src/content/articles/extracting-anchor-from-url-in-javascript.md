---
title: Извлечение якоря из URL в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-11
description: Извлечение якоря из URL в JavaScript
keywords: javascript
---

Извлечение якоря из **URL** в **JavaScript** может быть достаточно простым с использованием встроенных методов и свойств. Якорь в **URL** представляет собой часть строки после символа решетки `#`. Обычно он используется для указания на конкретное место на веб-странице.

Вот несколько способов извлечения якоря из **URL** в **JavaScript**.

### Свойство window.location.hash

```javascript
let anchor = window.location.hash;

console.log(anchor); 
```

`anchor` - содержит значение якоря, например, если URL: http://example.com/page#section1, то anchor будет равен '#section1'

Этот способ прост и прямолинеен. Он просто возвращает часть **UR**L, начиная с символа `#`.

### Регулярное выражение

```javascript
let url = "http://example.com/page#section1";
let anchor = url.match(/#(.*)/);

console.log(anchor[1]); // содержит значение якоря, т.е. 'section1'
```

Этот метод использует регулярное выражение, чтобы найти часть строки после символа `#`.

### Разбиение строки по символу `#`

```javascript
let url = "http://example.com/page#section1";
let parts = url.split('#');
let anchor = parts[1];

console.log(anchor); // содержит значение якоря, т.е. 'section1'
```

Этот метод разбивает строку **URL** на массив строк, используя символ `#` в качестве разделителя, и затем берет второй элемент массива, содержащий якорь.

### Использование URL API (современный подход)

```javascript
let url = new URL("http://example.com/page#section1");
let anchor = url.hash.substring(1); // отрезаем решетку (#)

console.log(anchor); // содержит значение якоря, т.е. 'section1'
```

Этот метод использует встроенный **URL API**, который предоставляет доступ к различным частям **URL**, включая якорь.

<br>

Выбор метода зависит от контекста вашего проекта и требований к поддержке браузеров. В большинстве случаев использование свойства `window.location.hash` будет наиболее удобным и эффективным способом.

