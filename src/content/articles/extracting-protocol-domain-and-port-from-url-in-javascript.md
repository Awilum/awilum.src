---
title: Извлечение протокола, домена и порта из URL в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-11
description: Извлечение протокола, домена и порта из URL в JavaScript
keywords: javascript
---

Извлечение протокола, домена и порта из **URL** в **JavaScript** можно выполнить с помощью объекта **URL** или регулярных выражений.

### Использование объекта URL

Объект **URL** в **JavaScript** предоставляет удобный способ для разбора и работы с **URL**-адресами. 

Вот как можно извлечь протокол, домен и порт:

```javascript
// URL-адрес, который нужно разобрать
let urlString = "https://www.example.com:8080/path/to/resource";

// Создание объекта URL
let url = new URL(urlString);

// Извлечение протокола
let protocol = url.protocol;

// Извлечение домена
let domain = url.hostname;

// Извлечение порта
let port = url.port;

console.log(protocol); // https:
console.log(domain);   // www.example.com
console.log(port);     // 8080
```

### Использование регулярных выражений:

Для извлечения данных из URL можно использовать регулярные выражения. 

Ниже пример кода:

```javascript
// URL-адрес, который нужно разобрать
let urlString = "https://www.example.com:8080/path/to/resource";

// Регулярное выражение для извлечения протокола, домена и порта
let urlRegex = /^(https?:)\/\/([^:/]+)(:\d+)?/i;

// Получение совпадений с помощью регулярного выражения
let matches = urlString.match(urlRegex);

let protocol, domain, port; // Объявляем переменные в более широкой области видимости

if (matches) {
    protocol = matches[1]; // https:
    domain = matches[2];   // www.example.com
    port = matches[3] ? matches[3].slice(1) : ""; // 8080 (если есть), иначе ""
}

console.log(protocol); // https:
console.log(domain);   // www.example.com
console.log(port);     // 8080
```