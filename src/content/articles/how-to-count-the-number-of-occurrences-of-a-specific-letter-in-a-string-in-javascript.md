---
title: Как подсчитать количество вхождений определённой буквы в строку в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-13
description: Как подсчитать количество вхождений определённой буквы в строку в JavaScript
keywords: javascript
---

Вы можете подсчитать количество раз, которое определенная буква встречается в строке в **JavaScript**, используя различные методы.

### Цикл `for`

```javascript
function countOccurrences(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }

    return count;
}

let myString = "Hello, world!";
let charToCount = "o";
let occurrences = countOccurrences(myString, charToCount);

console.log("Количество вхождений символа '" + charToCount + "': " + occurrences);

// Количество вхождений символа 'o': 2
```

Этот код проходит по каждому символу в строке и увеличивает счетчик, если текущий символ соответствует искомому.

### Метод `split`

```javascript
function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

let myString = "Hello, world!";
let charToCount = "l";
let occurrences = countOccurrences(myString, charToCount);

console.log("Количество вхождений символа '" + charToCount + "': " + occurrences);

// Количество вхождений символа 'l': 3
```

Этот код разбивает строку по заданному символу и затем подсчитывает количество частей. Количество вхождений символа будет на один меньше, чем количество частей, поэтому мы вычитаем 1.
