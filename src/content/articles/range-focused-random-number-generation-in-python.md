---
title: Генерация случайных чисел с фокусом на диапазоне в Python
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-12
description: Генерация случайных чисел с фокусом на диапазоне в Python
keywords: python, number, random
---

В **Python** есть несколько способов генерации случайных чисел с фокусом на определенном диапазоне. Для этого обычно используется модуль `random`.

### random.randint(a, b)

Этот метод возвращает случайное целое число `N`, такое что `a <= N <= b`. 

Границы `a` и `b` включаются в диапазон.

```python
import random

# Случайное число в диапазоне от 1 до 100 включительно
number = random.randint(1, 100) 

print(number)
```

### random.randrange(start, stop[, step])

Этот метод возвращает случайное число из диапазона с шагом `step`. 

Значение `stop` не включается в диапазон.

```python
import random

# Случайное нечетное число от 1 до 99
number = random.randrange(1, 100, 2)

print(number)
```

### random.uniform(a, b)

Этот метод возвращает случайное число с плавающей точкой.

```python
import random

# Случайное число с плавающей точкой от 1.0 до 10.0
number = random.uniform(1.0, 10.0)

print(number)
```

### random.choice(seq)

Этот метод возвращает случайный элемент из непустой последовательности.

```python
import random

items = [1, 2, 3, 4, 5]

# Случайный элемент из списка items
random_item = random.choice(items)

print(random_item)
```

### random.sample(population, k)

Этот метод возвращает список уникальных элементов длины k из последовательности population.

```python
import random

items = [1, 2, 3, 4, 5]

# Три случайных элемента из списка items
random_items = random.sample(items, 3)

print(random_items)
```

<br>

Это основные методы модуля `random` для генерации случайных чисел в **Python**. 

Выбор метода зависит от вашей конкретной задачи и формата чисел, которые вы хотите получить.