---
title: Извлечение расширения из имени файла на Javascript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-11
description: Извлечение расширения из имени файла на Javascript
keywords: javascript
---

Извлечение расширения файла из его имени - это распространенная задача во многих программных приложениях, включая веб-приложения на **JavaScript**. Это часто используется для определения типа файла или для валидации ввода пользователя. В **JavaScript** можно легко извлечь расширение файла с помощью различных методов. 

### Использование метода `split()`

**JavaScript** предоставляет метод `split()`, который позволяет разделить строку на подстроки с помощью разделителя. Мы можем использовать этот метод, чтобы разделить имя файла и извлечь расширение. 

Например:

```javascript
function getFileExtension(filename) {
    return filename.split('.').pop();
}

// Пример использования
let filename = "example.docx";
let extension = getFileExtension(filename);

console.log(extension); // docx
```

### Использование метода `lastIndexOf()`

Метод `lastIndexOf()` находит последнее вхождение указанного значения в строке и возвращает его позицию. Мы можем использовать этот метод для поиска последней точки в имени файла и извлечения расширения после нее. 

Например:

```javascript
function getFileExtension(filename) {
    const lastDotIndex = filename.lastIndexOf('.');

    // Проверка на случай, если точка не найдена или она первый символ
    if (lastDotIndex === -1 || lastDotIndex === 0) return "";
    
    return filename.slice(lastDotIndex + 1);
}

// Пример использования
let filename = "example.pdf";
let extension = getFileExtension(filename);

console.log(extension); // pdf
```

### Использование регулярных выражений

Мы также можем использовать регулярные выражения для извлечения расширения файла. 

Например:

```javascript
function getFileExtension(filename) {
    const regex = /(?:\.([^.]+))?$/;
    const match = regex.exec(filename);
    return match[1] ? match[1] : '';
}

// Пример использования
let filename = "example.jpg";
let extension = getFileExtension(filename);

console.log(extension); // jpg
```