---
title: Множественная замена подстрок в Python
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-29
description: Множественная замена подстрок в Python
keywords: python
---

При работе с текстовыми данными в **Python** иногда возникает необходимость заменить одну или несколько подстрок в строке другими значениями. Это может быть полезно, например, при очистке данных, форматировании текста или обработке строковых шаблонов. 

### Метод `str.replace()`

Один из самых простых способов заменить подстроку в строке - использовать метод `replace()` объектов типа `str`. Однако, этот метод позволяет заменить только одну подстроку за раз. Для множественной замены можно применять его последовательно несколько раз.

```python
text = "Хороший день, хороший мир!"
text = text.replace("хороший", "прекрасный")
text = text.replace("мир", "вселенная")

print(text)
```

Этот код выведет:

```
Прекрасный день, прекрасная вселенная!
```

### Регулярные выражения

Для более сложных задач замены подстрок часто используются регулярные выражения. Модуль `re` в **Python** предоставляет мощные средства для работы с регулярными выражениями.

```python
import re

text = "apple, banana, cherry"
text = re.sub(r"apple|banana|cherry", "fruit", text)

print(text)
```

Результат выполнения этого кода будет:

```
fruit, fruit, fruit
```

В данном примере мы использовали метод `re.sub()`, который заменяет все вхождения указанных подстрок на заданное значение.

### Использование словаря

Для более гибкой и структурированной множественной замены подстрок можно воспользоваться словарем, где ключами будут искомые подстроки, а значениями - строки, на которые они должны быть заменены.

```python
# Пример использования словаря для множественной замены
text = "Hello, world! How are you?"

replacements = {
    "Hello": "Hi",
    "world": "Earth",
    "you": "everyone"
}

for old, new in replacements.items():
    text = text.replace(old, new)

print(text)
```

Результат выполнения данного кода будет:

```
Hi, Earth! How are everyone?
```

Этот метод позволяет более гибко управлять заменой подстрок и легко добавлять новые правила замены.