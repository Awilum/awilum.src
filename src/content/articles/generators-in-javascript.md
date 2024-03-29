---
title: Генераторы в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-29
description: Генераторы в JavaScript
keywords: javascript
---

**Генераторы** - это функции, которые могут быть приостановлены на определенном этапе выполнения. Они позволяют возвращать промежуточные результаты без завершения функции. Это значит, что код может выполняться по требованию, поочередно, возвращая значения в процессе.

**Генераторы** определяются с использованием ключевого слова `function*`, и внутри них используется ключевое слово `yield` для возврата значения. 

Вот простой пример:

```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // undefined
```

### Как работают генераторы?

Когда генератор вызывается, он возвращает объект, известный как итератор. Этот итератор имеет метод `next()`, который при каждом вызове возвращает объект с двумя свойствами: `value`, содержащим текущее возвращаемое значение, и `done`, указывающим, завершен ли генератор.

Когда вызывается `yield`, выполнение функции приостанавливается, а переданное значение возвращается как результат вызова `next()`. При каждом последующем вызове `next()` выполнение продолжается с момента приостановки до следующего оператора `yield` или конца функции.

Генераторы позволяют лениво вычислять значения, что означает, что код может вычислять значения только по мере необходимости, что может быть полезно для больших или бесконечных последовательностей.

### Примеры использования генераторов

Генерация последовательностей Фибоначчи:

```javascript
function* fibonacciSequence() {
    let prev = 0,
        curr = 1;
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibonacciGenerator = fibonacciSequence();

console.log(fibonacciGenerator.next().value); // 1
console.log(fibonacciGenerator.next().value); // 1
console.log(fibonacciGenerator.next().value); // 2
console.log(fibonacciGenerator.next().value); // 3
```

Асинхронные операции с генераторами:

```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random());
        }, 1000);
    });
}

function* asyncGenerator() {
    const data1 = yield fetchData();
    const data2 = yield fetchData();
    console.log("Data 1:", data1);
    console.log("Data 2:", data2);
}

const gen = asyncGenerator();
gen.next().value.then((result1) => {
    gen.next(result1).value.then((result2) => {
        gen.next(result2);
    });
});

// Data 1: 0.47532567805424186
// Data 2: 0.6717155034354907
```