---
title: Рисование кривых Безье в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-27
description: Рисование кривых Безье в Canvas
keywords: javascript, canvas
---

<p><strong>Кривые Безье </strong>— это математические кривые, которые широко используются в компьютерной графике для создания плавных и красивых кривых. Они были впервые разработаны французским инженером <strong>Пьером Безье</strong> в 1960-х годах для описания автомобильных кузовов в компании Renault. Кривые Безье могут быть различных порядков, включая линейные (порядка 1), квадратичные (порядка 2), кубические (порядка 3) и т. д.</p>

<p>Для рисования кривых Безье в Canvas доступны следующие методы: <code>quadraticCurveTo()</code> и <code>bezierCurveTo()</code></p>

### Рисование с помощью метода <code>quadraticCurveTo()</code>

<p>Этот метод добавляет кривую Безье к текущему пути, определяемую начальной точкой пути (текущей позицией), одной контрольной точкой <code>(cp1x, cp1y)</code> и конечной точкой <code>(x, y)</code>. Это квадратичная кривая Безье.</p>

<p><strong>Синтаксис:</strong></p>

```javascript
quadraticCurveTo(cpx, cpy, x, y)
```

<p><strong>Параметры:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>cpx</code></td>
			<td>Координата оси X контрольной точки.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>cpy</code></td>
			<td>Координата оси Y контрольной точки.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>x</code></td>
			<td>Координата X новой позиции курсора.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>y</code></td>
			<td>Координата Y новой позиции курсора.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
ctx.beginPath();
ctx.moveTo(50, 50); // Начальная точка

// Квадратичная кривая Безье с одной контрольной точкой
ctx.quadraticCurveTo(100, 150, 150, 50);

ctx.stroke(); // Рисуем контур пути
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/ExMeygL?default-tab=result" width="100%"></iframe></p>

### Рисование с помощью метода <code>bezierCurveTo()</code>

<p>Этот метод добавляет кривую Безье к текущему пути, определяемую начальной точкой пути (текущей позицией), двумя контрольными точками <code>(cp1x, cp1y)</code> и <code>(cp2x, cp2y)</code> и конечной точкой <code>(x, y)</code>. Это кубическая кривая Безье.</p>

<p><strong>Синтаксис:</strong></p>

```javascript
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

<p><strong>Параметры:</strong></p>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>cp1x, cp1y</code></td>
			<td>Координата первой контрольной точки по оси X и Y.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>cp2x, cp2y</code></td>
			<td>Координата второй контрольной точки по оси X и Y.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>x</code></td>
			<td>Координата X конечной позиции курсора.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>y</code></td>
			<td>Координата Y конечной позиции курсора.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
ctx.beginPath();
ctx.moveTo(50, 50); // Начальная точка
ctx.bezierCurveTo(100, 100, 150, 150, 200, 50); // Кубическая кривая Безье
ctx.stroke(); // Рисуем контур пути
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/GReXjRj?default-tab=result" width="100%"></iframe></p>

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