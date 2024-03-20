---
title: Итератор в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-20
description: Итератор в JavaScript
keywords: javascript
---

В **JavaScript** итератор – это объект, который предоставляет последовательный доступ к элементам коллекции, такой как массив или объект. Он позволяет перебирать элементы коллекции по одному и выполнять определенные операции над ними без необходимости знания внутренней структуры этой коллекции. Итераторы широко используются в **JavaScript**, особенно в циклах `for...of`, spread операторах, и методах массива, таких как `map()`, `filter()`, и `reduce()`.

Для создания итератора в **JavaScript** можно использовать методы объекта `Symbol.iterator`. Этот метод должен вернуть объект, который соответствует интерфейсу итератора. Интерфейс итератора включает в себя метод `next()`, который возвращает объект со свойствами `value` и `done`. value представляет текущий элемент в последовательности, а `done` указывает, завершен ли перебор коллекции.

Пример создания итератора для массива:

```javascript
const myArray = [1, 2, 3];
const iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

В этом примере `myArray[Symbol.iterator]()` возвращает объект-итератор для массива `myArray`. Последовательные вызовы метода `next()` возвращают каждый элемент массива в порядке их следования. После последнего элемента метод `next()` возвращает объект с `done: true`.

Итераторы можно также создавать для собственных объектов. Для этого нужно определить метод `Symbol.iterator в прототипе объекта.

Вот пример:

```javascript
const myObject = {
  data: ['apple', 'banana', 'orange'],
  [Symbol.iterator]: function() {
    let index = 0;
    return {
      next: () => {
        return index < this.data.length ?
          { value: this.data[index++], done: false } :
          { done: true };
      }
    };
  }
};

const iterator = myObject[Symbol.iterator]();

console.log(iterator.next()); // { value: 'apple', done: false }
console.log(iterator.next()); // { value: 'banana', done: false }
console.log(iterator.next()); // { value: 'orange', done: false }
console.log(iterator.next()); // { done: true }
```

Это создает объект `myObject`, содержащий массив данных и метод `Symbol.iterator`, который возвращает итератор для перебора элементов этого массива.

Давайте рассмотрим еще несколько примеров использования итераторов в **JavaScript**.

### Использование итераторов в цикле `for...of`

Цикл `for...of` предоставляет удобный способ перебора элементов коллекции с использованием итератора. 

Вот пример:

```javascript
const myArray = ['apple', 'banana', 'orange'];

for (const item of myArray) {
  console.log(item);
}

// apple
// banana
// orange
```

### Создание итератора для пользовательского типа данных

Вы также можете создавать собственные итераторы для пользовательских типов данных. 

Вот пример с пользовательским классом `Range`, представляющим диапазон чисел:

```javascript
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}

const range = new Range(1, 5);

for (const num of range) {
  console.log(num);
}

// 1
// 2
// 3
// 4
// 5
```

### Использование итераторов в объектах `Map` и `Set`

Объекты `Map` и `Set` также имеют свои итераторы:

```javascript
const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

// a => 1
// b => 2
// c => 3

const mySet = new Set([1, 2, 3, 4, 5]);

for (const item of mySet) {
  console.log(item);
}

// 1
// 2
// 3
// 4
// 5
```