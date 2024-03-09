---
title: Рисование дуги в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-26
description: Рисование дуги в Canvas
keywords: javascript, canvas
---

<p>Дуга создается с использованием методов&nbsp;<code>arc()</code> и&nbsp;<code>arcTo()</code></p>

### Рисование с помощью метода&nbsp;<code>arc()</code>

<p>Метод <code>arc()</code> используется для создания дуги или круга на холсте. Он задает дугу с центром в точке <code>(x, y)</code>, указанным радиусом, начальным и конечным углом в радианах и направлением (по или против часовой стрелки).</p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><code>x</code></td>
			<td>Координата X центра дуги.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>y</code></td>
			<td>Координата Y центра дуги.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>radius</code></td>
			<td>Радиус дуги.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>startAngle</code></td>
			<td>Начальный угол в радианах, с которого начинается дуга (0 - находится на правой горизонтальной оси).</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>endAngle</code></td>
			<td>Конечный угол в радианах, на котором заканчивается дуга.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>anticlockwise</code></td>
			<td>Направление дуги (против часовой стрелки - <code>true</code>, по часовой - <code>false</code>).</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример (рисование круга):</strong></p>

```javascript
// Начинаем новый путь
ctx.beginPath();

// Рисуем дугу (круг) с центром в точке (100, 100) и радиусом 50
ctx.arc(100, 100, 50, 0, Math.PI * 2);

// Закрываем путь (для круга это не обязательно)
// ctx.closePath();

// Рисуем контур пути
ctx.strokeStyle = 'blue'; // Цвет контура
ctx.lineWidth = 2; // Толщина линии
ctx.stroke();
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/xxBaObj?default-tab=result" width="100%"></iframe></p>


### Рисование с помощью метода&nbsp;<code>arcTo()</code>

<p>Метод <code>arcTo()</code>&nbsp;используется для добавления дуги к текущему пути, соединяющей текущую точку с точкой <code>(x2, y2)</code> с радиусом <code>radius</code>, и предыдущей линией с точки <code>(x1, y1)</code>. Это позволяет создавать более плавные углы между линиями, чем просто использование метода <code>lineTo()</code>.</p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><code>x1, y1</code></td>
			<td>Координаты начальной точки предыдущей линии.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>x2, y2</code></td>
			<td>Координаты конечной точки текущей линии.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>radius</code></td>
			<td>Радиус дуги.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Начинаем новый путь
ctx.beginPath();

// Перемещаем "курсор" в точку (20, 20)
ctx.moveTo(20, 20);

// Рисуем прямую линию до точки (100, 20)
ctx.lineTo(100, 20);

// Добавляем дугу, соединяющую текущую линию и предыдущую, с радиусом 30
ctx.arcTo(150, 20, 150, 70, 30);

// Рисуем прямую линию до точки (150, 120)
ctx.lineTo(150, 120);

// Закрываем путь
ctx.closePath();

// Рисуем контур пути
ctx.strokeStyle = 'blue'; // Цвет контура
ctx.lineWidth = 2; // Толщина линии
ctx.stroke();
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/abMaZOY?default-tab=result" width="100%"></iframe></p>


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