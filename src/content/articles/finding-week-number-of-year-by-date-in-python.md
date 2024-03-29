---
title: Определение номера недели года по дате в Python
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-29
description: Определение номера недели года по дате в Python
keywords: python
---

В **Python** есть несколько способов определить номер недели года по заданной дате. Номер недели может быть полезен при организации данных, планировании задач или анализе временных рядов. 

### Использование модуля datetime

Модуль `datetime` в **Python** предоставляет функционал для работы с датами и временем. Для определения номера недели года мы можем использовать метод `isocalendar()`, который возвращает кортеж из года, номера недели и дня недели.

Пример:

```python
import datetime

# Задаем дату
date = datetime.date(2024, 1, 1)

# Получаем номер недели года
week_number = date.isocalendar()[1]

print("Номер недели года:", week_number)
```

Этот код вернет:

```
Номер недели года: 1
```

Используя метод `isocalendar()`, мы получаем кортеж, содержащий год, номер недели и день недели для заданной даты. Мы обращаемся к элементу с индексом `[1]`, чтобы получить номер недели года.