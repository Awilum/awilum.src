---
title: Сравнение строк в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-15
description: Сравнение строк в JavaScript
keywords: javascript
---

В **JavaScript** есть несколько способов сравнения строк. Они могут отличаться в зависимости от того, каким образом вы хотите выполнить сравнение: по значению (лексикографически) или по ссылке.


### Сравнение по символам

**JavaScript** позволяет обращаться к отдельным символам в строке по их индексу. 

```javascript
let str1 = "apple";
let str2 = "banana";

for (let i = 0; i < str1.length && i < str2.length; i++) {
    if (str1[i] !== str2[i]) {
        console.log("Strings are not equal at index " + i);
        break;
    }
}
```

Сравнение строк посимвольно может быть реализовано с помощью `charAt()`


```javascript
let str1 = "apple";
let str2 = "banana";

for (let i = 0; i < str1.length && i < str2.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
        console.log("Strings are not equal at index " + i);
        break;
    }
}
```

### Сравнение с помощью метода `localeCompare()`

Этот метод сравнивает две строки с учетом текущей локали (языка) браузера. Он возвращает число, указывающее на относительное положение строк в лексикографическом порядке.

```javascript
let str1 = "apple";
let str2 = "banana";

console.log(str1.localeCompare(str2));  // -1 (str1 перед str2 в алфавитном порядке)
```
