---
title: Сохранение и восстановление состояния в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-03-01
description: Сохранение и восстановление состояния в Canvas
keywords: javascript, canvas
---

<p>Сохранение и восстановление состояния представляет собой механизм, который позволяет сохранять текущее состояние контекста рисования, включая текущие преобразования, стили и другие настройки, а затем восстанавливать их при необходимости. Этот механизм особенно полезен, когда вы хотите временно изменить настройки рисования, а затем вернуться к предыдущему состоянию без необходимости вручную сохранять и восстанавливать каждый атрибут.</p>

### Использование методов <code>save()</code> и <code>restore()</code>

<p>Существуют два метода для сохранения и восстановления состояния:</p>

<ul>
	<li>Метод <code>save()</code> сохраняет текущее состояние контекста рисования на стеке состояний.</li>
	<li>Метод <code>restore()</code> восстанавливает последнее сохраненное состояние контекста рисования из стека состояний.</li>
</ul>

```javascript
// Сохраняем текущее состояние
ctx.save(); 

// Выполняем изменения состояния (например, изменяем преобразования, стили и т. д.)
// ...

// Восстанавливаем предыдущее состояние
ctx.restore();
```

<p><strong>Пример:</strong></p>

```javascript
// Рисуем круг до изменений
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Сохраняем текущее состояние
ctx.save();

// Применяем преобразование
ctx.translate(200, 0);
ctx.rotate(Math.PI / 4);

// Рисуем круг после изменений
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Восстанавливаем предыдущее состояние
ctx.restore();

// Рисуем круг после восстановления
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();
```

<p>В этом примере после вызова <code>save()</code> текущее состояние контекста сохраняется на стеке состояний. Затем выполняется преобразование (сдвиг и поворот) и рисуется красный круг. После этого с помощью <code>restore()</code> состояние контекста восстанавливается до предыдущего состояния (до преобразований), и зеленый круг рисуется в исходном положении.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/xxByjVM?default-tab=result" width="100%"></iframe></p>

<div>
<h3 class="text-3xl mt-4 mb-4">Cтатьи про Canvas</h4>
<div class="pt-10 pb-10 border-black border-t-2 text-center grid grid-cols-1 lg:grid-cols-2 gap-4">
<a href="/articles/canvas-short-history/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white px-4 py-2 mr-2 flex items-center justify-center no-underline">Краткая история Canvas</a>
<a href="/articles/canvas-getting-started/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white px-4 py-2 mr-2 flex items-center justify-center no-underline">Начинаем работать с Canvas</a>
<a href="/articles/canvas-coordinates/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Координатная система в Canvas</a>
<a href="/articles/canvas-draw-rect/" class="bg-white text-black border-2 border-black rounded  hover:bg-black hover:text-white py-2 mr-2 flex items-center justify-center no-underline">Рисование прямоугольника в Canvas</a>
<a href="/articles/canvas-draw-path/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Рисование контуров в Canvas</a>
<a href="/articles/canvas-move-cursor/" class="bg-white text-black border-2 border-black rounded  hover:bg-black hover:text-white py-2 mr-2 flex items-center justify-center no-underline">Перемещение курсора в Canvas</a>
<a href="/articles/canvas-draw-line/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Рисование линии в Canvas</a>
<a href="/articles/canvas-draw-arc/" class="bg-white text-black border-2 border-black rounded  hover:bg-black hover:text-white py-2 mr-2 flex items-center justify-center no-underline">Рисование дуги в Canvas</a>
<a href="/articles/canvas-draw-curve/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Рисование кривых Безье в Canvas</a>
<a href="/articles/canvas-draw-images/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Рисование изображений в Canvas</a>
<a href="/articles/canvas-transformations/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Преобразования в Canvas</a>
<a href="/articles/canvas-save-and-restore/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Сохранение и восстановление состояния в Canvas</a>
<a href="/articles/canvas-composite/" class="bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white  py-2 mr-2 flex items-center justify-center no-underline">Композиция в Canvas</a>
</div>
</div>