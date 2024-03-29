---
title: Разбиение строк на слова в Python
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-12
description: Разбиение строк на слова в Python
keywords: python
---

В **Python** разбиение строки на слова – это обычная операция, которая часто используется при обработке текста. 

### Метод `split()`

Метод `split()` разбивает строку на список подстрок, используя указанный разделитель. По умолчанию разделительом считается пробел. 

Например:

```python
text = "Это пример строки, которую мы разобьем на слова."
words = text.split()

print(words)
```

Этот код выведет:

```
['Это', 'пример', 'строки,', 'которую', 'мы', 'разобьем', 'на', 'слова.']
```

### Метод `split()` с пользовательским разделителем

Вы также можете использовать метод `split()` с пользовательским разделителем. 

Например, чтобы разделить строку по запятой:

```python
text = "Яблоко, груша, вишня, апельсин"
fruits = text.split(", ")

print(fruits)
```

Этот код выведет:

```
['Яблоко', 'груша', 'вишня', 'апельсин']
```

### Метод `re.split()`

Модуль `re` предоставляет более гибкий способ разбиения строки с помощью регулярных выражений. 

Например, чтобы разделить строку по пробелам или запятым:

```python
import re

text = "Это пример, где мы используем регулярное выражение."
words = re.split(r'\s|,\s*', text)

print(words)
```

Этот код выведет:

```
['Это', 'пример', 'где', 'мы', 'используем', 'регулярное', 'выражение.']
```

Это лишь некоторые из способов разбиения строки на слова в **Python**. 

Выбор метода зависит от вашей конкретной задачи и уровня гибкости, который вам требуется.