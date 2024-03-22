---
title: Умное обрезание строк в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-22
description: Умное обрезание строк в JavaScript
keywords: javascript
---

В **JavaScript** существует несколько способов реализации умного обрезания строк, которые позволяют сохранять целостность слов и при этом обеспечивают нужную длину строки.

### Метод `slice()`

Метод `slice()` используется для извлечения части строки и возвращает новую строку без изменения оригинала. Он принимает два аргумента: начальный и конечный индексы для извлечения подстроки.

```javascript
function smartTrim(str, maxLength) {
    if (str.length <= maxLength) return str;
    let trimmedString = str.slice(0, maxLength);
    
    // Найдем последний пробел в обрезанной строке
    let lastSpaceIndex = trimmedString.lastIndexOf(' ');
    
    // Обрежем строку до последнего пробела
    if (lastSpaceIndex !== -1) {
        trimmedString = trimmedString.slice(0, lastSpaceIndex);
    }
    
    return trimmedString + '...';
}

let longString = "Lorem ipsum dolor sit amet consectetur adipiscing elit.";

console.log(smartTrim(longString, 30)); // Lorem ipsum dolor sit amet...
```

В этом примере `smartTrim()` обрезает строку до указанной длины, но также обеспечивает, чтобы строка не была обрезана посередине слова.

### Метод `substring()`

Метод `substring()` также используется для извлечения части строки, но он принимает два аргумента: начальный индекс и индекс конца подстроки.

```javascript
function smartTrim(str, maxLength) {
    if (str.length <= maxLength) return str;
    let trimmedString = str.substring(0, maxLength);
    let lastSpaceIndex = trimmedString.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
        trimmedString = trimmedString.substring(0, lastSpaceIndex);
    }
    return trimmedString + '...';
}

let longString = "Lorem ipsum dolor sit amet consectetur adipiscing elit.";

console.log(smartTrim(longString, 30)); // Lorem ipsum dolor sit amet...
```

Обратите внимание, что метод `substring()` работает аналогично методу `slice()`, но не поддерживает отрицательные индексы.

### Использование регулярных выражений

Еще один способ умного обрезания строк - использование регулярных выражений для поиска последнего пробела перед указанной длиной строки.

```javascript
function smartTrim(str, maxLength) {
  if (str.length <= maxLength) return str;
  let trimmedString = str.substring(0, maxLength);
  trimmedString = trimmedString.replace(/\s+\S*$/, '');
  return trimmedString + '...';
}

let longString = "Lorem ipsum dolor sit amet consectetur adipiscing elit.";

console.log(smartTrim(longString, 30)); // Lorem ipsum dolor sit amet...
```

В этом примере мы используем регулярное выражение `\s+\S*$`, чтобы найти последний пробел перед указанной длиной строки и удалить все символы после него.

