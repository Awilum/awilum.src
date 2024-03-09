---
title: Как определить операционную систему пользователя в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-08
description: Как определить операционную систему пользователя в JavaScript
keywords: javascript
---

В **JavaScript** существует несколько способов определить операционную систему пользователя. 

### navigator.platform

Это свойство объекта navigator, который предоставляет информацию о браузере пользователя. Оно возвращает строку, представляющую платформу, на которой запущен браузер. Например, если пользователь использует Windows, значение будет "Win32" или "Win64". Если это macOS, значение будет "MacIntel", "MacPPC" или "Mac68K". Если это Linux, то значение будет "Linux i686" или "Linux x86_64".

Пример:

```javascript
let platform = navigator.platform;

console.log(platform);
```

### navigator.userAgent

Это еще одно свойство объекта `navigator`, которое возвращает строку с информацией о браузере пользователя. С помощью регулярных выражений можно проверить эту строку на наличие ключевых слов, указывающих на операционную систему пользователя.

Пример:

```javascript
let userAgent = navigator.userAgent;

if (userAgent.match(/Windows/i)) {
    console.log("Пользователь использует Windows.");
} else if (userAgent.match(/Macintosh/i)) {
    console.log("Пользователь использует macOS.");
} else if (userAgent.match(/Linux/i)) {
    console.log("Пользователь использует Linux.");
} else {
    console.log("Не удалось определить операционную систему пользователя.");
}
```

### window.navigator.platform и window.navigator.userAgentData

Начиная с более новых версий **JavaScript** и браузеров, можно использовать свойства `platform` и `userAgentData` объекта `navigator` для получения информации об операционной системе пользователя. Это более надежные и точные способы определения.

Пример:

```javascript
let platform = window.navigator.platform;
let userAgentData = window.navigator.userAgentData;

console.log("Platform:", platform);
console.log("User Agent Data:", userAgentData);
```

<br>

Эти методы позволяют определить операционную систему пользователя на основе данных, предоставленных браузером. Однако стоит помнить, что пользователи могут изменять настройки браузера или использовать специализированные программы для скрытия своей операционной системы, поэтому результаты могут быть не всегда точными.