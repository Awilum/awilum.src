---
title: Кодирование длин серий
layout: ../../layouts/ArticleEntry.astro
categories: [algorithms]
pubDate: 2024-03-20
description: Кодирование длин серий
keywords: алгоритмы, RLE
---

Кодирование длин серий (англ. run-length encoding, RLE) или кодирование повторов — алгоритм сжатия данных, заменяющий повторяющиеся символы (серии) на один символ и число его повторов. Серией называется последовательность, состоящая из нескольких одинаковых символов. При кодировании (упаковке, сжатии) строка одинаковых символов, составляющих серию, заменяется строкой, содержащей сам повторяющийся символ и количество его повторов.

### Принцип работы RLE

1. **Поиск серий.**   
Строка данных анализируется на наличие серий, то есть последовательностей одинаковых символов.
2. **Кодирование серий.**   
Повторяющиеся символы заменяются на один символ и количество его повторов. Например, строка "AAABBBCCC" может быть закодирована как "3A3B3C".
3. **Декодирование.**   
Закодированная строка может быть восстановлена обратно в исходную форму путем раскодирования.


### Пример работы RLE

Пусть дана строка: "AAABBBCCCCDDDD".

Алгоритм RLE обнаруживает следующие серии:
- "AAA"
- "BBB"
- "CCCC"
- "DDDD"

<br>

Каждая серия заменяется на символ и количество его повторов:
- "3A"
- "3B"
- "4C"
- "4D"

<br>

Результирующая закодированная строка будет:  
- "3A3B4C4D".

<br>

### Преимущества RLE
1. **Простота.**   
Алгоритм RLE легко реализовать и понять.
2. **Эффективность для определенных типов данных.**   
RLE особенно хорошо работает с данными, содержащими много повторяющихся символов, такими как изображения с большими областями одного цвета или текстовые файлы с повторяющимися символами.

### Недостатки RLE  
1. **Неэффективность для некоторых типов данных.**   
В случае, если данные имеют низкую степень повторяемости (например, случайный шум), алгоритм RLE может увеличить размер данных из-за добавления счетчиков.
2. **Ограничение на сжатие.**   
RLE не всегда достигает высокой степени сжатия по сравнению с более сложными алгоритмами сжатия данных.

<br>

Очевидно, что такой метод кодирования эффективен для данных, в которых преобладают последовательности одинаковых символов, как, например, в простых графических изображениях, таких как иконки и схематические рисунки. Однако он не столь эффективен для изображений с постепенным переходом оттенков, например, фотографий.

Часто встречаемыми форматами для сжатия данных с использованием метода кодирования длин серий (RLE) являются PackBits, PCX и ILBM.

Этот метод сжатия может быть применен к произвольным файлам с двоичными данными, поскольку многие спецификации форматов файлов содержат повторяющиеся байты в области выравнивания данных. Однако современные системы сжатия, такие как Deflate, чаще используют алгоритмы, основанные на LZ77, который является обобщением метода кодирования длин серий и оперирует последовательностями символов вида «BWWBWWBWWBWW».

Звуковые данные, содержащие длинные последовательные серии байт (например, низкокачественные аудио-сэмплы), могут быть сжаты с помощью RLE после применения к ним Дельта-кодирования.