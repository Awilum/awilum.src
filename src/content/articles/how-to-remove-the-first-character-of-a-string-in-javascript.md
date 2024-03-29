---
title: Как удалить первый символ строки в JavaScript?
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-06
description: Как удалить первый символ строки в JavaScript?
keywords: javascript
---

Чтобы удалить первый символ из строки в **JavaScript**, можно использовать несколько различных способов. 

### Использование метода `substring()`

Метод `substring()` позволяет вырезать подстроку из строки по указанным индексам. Мы можем использовать этот метод, указав начальный индекс как 1 (что соответствует второму символу) и конечный индекс, равный длине строки.

```javascript
let str = "example";

str = str.substring(1);

console.log(str); // "xample"
```

### Использование метода `slice()`

Метод `slice()` также позволяет вырезать подстроку из строки. Мы можем использовать его, указав начальный индекс как 1 (опять же, соответствует второму символу).

```javascript
let str = "example";

str = str.slice(1);

console.log(str); // "xample"
```

### Использование метода `substr()`

Метод `substr()` позволяет выбирать подстроку начиная с определенного индекса и указывая количество символов. Мы можем использовать его, указав начальный индекс как 1 и количество символов равным длине строки минус один.

```javascript
let str = "example";

str = str.substr(1);

console.log(str); // "xample"
```

<br>

Все эти методы выполняют одно и то же действие - удаляют первый символ из строки и возвращают измененную строку. Выбор метода зависит от предпочтений и конкретных требований вашего проекта.