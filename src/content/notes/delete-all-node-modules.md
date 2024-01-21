---
title: Удалить все node_modules
layout: ../../layouts/NoteEntry.astro
categories: [javascript]
pubDate: 2024-01-09
description: Удалить все node_modules
keywords: javascript, node_modules
---

Если вы разрабатываете приложение на Node.js, вы, вероятно, знакомы с папкой `node_modules`. Эта папка содержит все зависимости вашего проекта (проектов), и она может занимать много места на диске. Иногда вам может потребоваться удалить все `node_modules` из-за различных причин, таких как освобождение места на диске, очистка проекта перед публикацией или просто из-за проблем с зависимостями. 

### С использованием `npkill`

Этот полезный инструмент позволяет вам найти любые устаревшие каталоги `node_modules` в вашей системе, которые вы можете легко удалить.

Установить его можно выполнив команду в консоли:
```bash
npm i -g npkill
```

Запустить:
```bash
npx npkill
```

![](https://npkill.js.org/img/start%20search.gif)

Страница проекта: https://npkill.js.org/

### Альтернативынй вариант (Linux & Mac)

Вывести список каталогов, которые будут удалены:

```bash
find . -name 'node_modules' -type d -prune
```

Удалить каталоги из текущего рабочего каталога:

```bash
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```