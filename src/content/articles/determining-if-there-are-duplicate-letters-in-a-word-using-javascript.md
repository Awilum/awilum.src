---
title: Определение наличия повторяющихся подряд букв в слове с использованием JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-13
description: Определение наличия повторяющихся подряд букв в слове с использованием JavaScript
keywords: javascript
---

В **JavaScript** существует несколько способов определить, есть ли повторяющиеся подряд буквы в слове. 

Вот один из простых способов с использованием цикла `for` и метода `charAt()`:

```javascript
function hasConsecutiveLetters(word) {
    for (let i = 0; i < word.length - 1; i++) {
        if (word.charAt(i) === word.charAt(i + 1)) {
            return true;
        }
    }
    return false;
}

// Пример использования
console.log(hasConsecutiveLetters("hello")); // true
console.log(hasConsecutiveLetters("world")); // false
console.log(hasConsecutiveLetters("Анна"));  // true
console.log(hasConsecutiveLetters("Аня"));   // false
```

Этот код проверяет каждую букву в слове, начиная с первой, и сравнивает её с буквой, следующей за ней. Если они равны, функция возвращает `true`, что означает наличие повторяющихся подряд букв. Если ни одна пара букв не совпадает, функция `hasConsecutiveLetters` возвращает `false`.

Другой способ - использовать регулярные выражения:

```javascript
function hasConsecutiveLettersRegex(word) {
    return /(.)\1/.test(word);
}

// Пример использования
console.log(hasConsecutiveLettersRegex("hello")); // true
console.log(hasConsecutiveLettersRegex("world")); // false
console.log(hasConsecutiveLettersRegex("Анна"));  // true
console.log(hasConsecutiveLettersRegex("Аня"));   // false
```

В этом случае регулярное выражение `(.)\1` означает любой символ, за которым следует точно такой же символ, найденный ранее `\1`. Если такое совпадение найдено в слове, то функция `hasConsecutiveLettersRegex` возвращает `true`.