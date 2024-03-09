---
title: Рисование контуров в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-24
description: Рисование контуров в Canvas
keywords: javascript, canvas
---

<p><strong>Рисование контуров</strong>, также известное как <strong>работа с путями (path)</strong>, представляет собой способ создания сложных форм и фигур на холсте. Работа с путями позволяет создавать кривые, ломаные линии, а также комбинировать различные фигуры в одном элементе. В основе работы с путями лежит использование методов для создания пути, а затем применение методов для его рисования и/или заливки.</p>

<p>Создание фигур с использованием контуров включает в себя несколько важных шагов:</p>

<ol>
	<li>Начинается с создания контура.</li>
	<li>Затем, с помощью команд рисования, контур рисуется.</li>
	<li>После этого контур закрывается.</li>
	<li>Созданный контур можно обвести или заполнить для его отображения.</li>
</ol>

<p>Ниже приведены некоторые методы, которые могут быть использованы на каждом из описанных шагов.</p>

<p><strong>Создание пути:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td><code>beginPath()</code></td>
			<td>Метод начинает новый путь или очищает текущий путь.</td>
		</tr>
		<tr>
			<td>
			<p><code>...()</code></p>
			</td>
			<td>Методы для установки различных контуров объекта.</td>
		</tr>
		<tr>
			<td><code>closePath()</code></td>
			<td>Закрывает текущий путь, соединяя последнюю точку с первой.</td>
		</tr>
	</tbody>
</table>

<p><strong>Рисование пути:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td><code>stroke()</code></td>
			<td>Рисует контур пути.</td>
		</tr>
		<tr>
			<td><code>fill()</code></td>
			<td>Заливает внутренность пути.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример (рисование треугольника):</strong></p>

```javascript
// Начинаем новый путь
ctx.beginPath();

// Перемещаем "курсор" в точку (50, 50)
ctx.moveTo(50, 50);

// Добавляем линии до двух других точек, чтобы создать треугольник
ctx.lineTo(100, 100);
ctx.lineTo(150, 50);

// Закрываем путь, соединяя последнюю точку с первой
ctx.closePath();

// Рисуем контур пути
ctx.strokeStyle = 'blue'; // Цвет контура
ctx.lineWidth = 2; // Толщина линии
ctx.stroke();
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/BabOymY?default-tab=result" width="100%"></iframe></p>


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