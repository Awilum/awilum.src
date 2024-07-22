---
title: Экранирование кавычек и специальных символов в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-07-22
description: Экранирование кавычек и специальных символов в JavaScript
keywords: javascript
---

В **JavaScript** экранирование кавычек используется для того, чтобы включать кавычки внутри строковых литералов без нарушения синтаксиса.  

Рассмотрим основные способы экранирования кавычек.

### Экранирование одинарных кавычек в строке с одинарными кавычками

Если строка заключена в одинарные кавычки, то одинарные кавычки внутри этой строки нужно экранировать с помощью обратной косой черты `\`:

```javascript
let singleQuote = 'This is how you can include a single quote (\') inside a single-quoted string.';

console.log(singleQuote); 

// This is how you can include a single quote (') inside a single-quoted string.
```

### Экранирование двойных кавычек в строке с двойными кавычками

Аналогично, если строка заключена в двойные кавычки, то двойные кавычки внутри этой строки нужно экранировать:

```javascript
let doubleQuote = "This is how you can include a double quote (\") inside a double-quoted string.";

console.log(doubleQuote); 

// This is how you can include a double quote (") inside a double-quoted string.
```

### Использование разных типов кавычек

Одинарные кавычки внутри строки, заключенной в двойные кавычки, и наоборот, не требуют экранирования:

```javascript
let mixedQuotes1 = "This is a string with 'single quotes' inside double quotes.";
let mixedQuotes2 = 'This is a string with "double quotes" inside single quotes.';

console.log(mixedQuotes1);
// This is a string with 'single quotes' inside double quotes.

console.log(mixedQuotes2); 
// This is a string with "double quotes" inside single quotes.
```

### Экранирование в шаблонных строках

В шаблонных строках (template literals), которые заключены в обратные кавычки, кавычки также не требуют экранирования, если используются одинарные или двойные кавычки. Однако, если внутри шаблонной строки нужно включить обратную косую черту, её необходимо экранировать:

```javascript
let templateLiteral = `This is a template literal with 'single quotes' and "double quotes".`;

console.log(templateLiteral); 
// This is a template literal with 'single quotes' and "double quotes".

let backslash = `This is how you include a backslash (\\) in a template literal.`;

console.log(backslash); 
// This is how you include a backslash (\) in a template literal.
```

### Экранирование других специальных символов

Кроме кавычек, в строках могут использоваться и другие специальные символы, которые также требуют экранирования. Например, новая строка `\n`, табуляция `\t` и другие:

```javascript
let specialCharacters = 'This is a string with a newline character.\nAnd this is the new line.';

console.log(specialCharacters);

// This is a string with a newline character.
// And this is the new line.
```