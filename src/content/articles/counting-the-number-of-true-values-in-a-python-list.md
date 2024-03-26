---
title: Как подсчитать количество True в списке Python
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-26
description: Как подсчитать количество True в списке Python
keywords: python
---

В **Python**, когда нам нужно подсчитать количество элементов с определенным значением в списке, мы можем воспользоваться различными методами. Один из самых простых способов сделать это - это использовать цикл или функции высшего порядка, такие как `filter()` или `count()`. 

### Использование цикла

```python
def count_true(lst):
    count = 0
    for item in lst:
        if item == True:
            count += 1
    return count

# Пример использования
my_list = [True, False, True, True, False]

print("Количество True в списке:", count_true(my_list))
```

### Использование функции `filter()`

Функция `filter()` может быть использована для фильтрации элементов списка по определенному условию.

```python
my_list = [True, False, True, True, False]

true_count = len(list(filter(lambda x: x == True, my_list)))

print("Количество True в списке:", true_count)
```

### Использование метода `count()`

Метод `count()` предоставляет простой способ подсчета количества конкретных элементов в списке.

```python
my_list = [True, False, True, True, False]

true_count = my_list.count(True)

print("Количество True в списке:", true_count)
```