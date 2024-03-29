---
title: Создание временной директории в Python
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-24
description: Создание временной директории в Python
keywords: python, os, files, directories, filesystem
---

Во время работы с приложениями **Python** часто возникает необходимость создания временных директорий для временного хранения данных или файлов. **Python** предоставляет удобные инструменты для работы с файловой системой, включая создание временных директорий. В этой статье мы рассмотрим, как создать временную директорию в **Python** с использованием стандартной библиотеки.

В **Python** создание временных директорий можно осуществить с помощью модуля `tempfile`. Этот модуль позволяет безопасно создавать временные файлы и директории с уникальными именами.

```python
import tempfile
import os

# Создание временной директории
temp_dir = tempfile.mkdtemp()

print("Временная директория создана:", temp_dir)

# Выполнение операций с временной директорией

# Удаление временной директории
os.rmdir(temp_dir)
print("Временная директория удалена")
```

В приведенном выше примере:

1. Мы импортировали модуль `tempfile` и модуль `os`, который используется для удаления временной директории.
2. Функция `tempfile.mkdtemp()` создает временную директорию и возвращает ее путь.
3. После выполнения необходимых операций с временной директорией мы можем удалить ее с помощью функции `os.rmdir()`.