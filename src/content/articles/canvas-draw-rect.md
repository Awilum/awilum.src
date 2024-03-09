---
title: Рисование прямоугольника в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-23
description: Рисование прямоугольника в Canvas
keywords: javascript, canvas
---

<p>Рисование прямоугольников на элементе <strong>Canvas</strong> &mdash;&nbsp;одно из самых базовых и часто используемых действий при создании графики на веб-странице с помощью <strong>JavaScript</strong>. Прямоугольники можно использовать для создания различных элементов интерфейса, фонов, рамок и многого другого. Давайте рассмотрим подробно, как рисовать прямоугольники на <strong>Canvas</strong>.</p>

### Использование метода <code>fillRect()</code>

<p>Метод <code>fillRect()</code> используется для создания прямоугольника, который заполняется цветом и находится в заданных координатах (x, y), имея размеры, определяемые параметрами <code>width</code> и <code>height</code>. Стиль заполнения прямоугольника задается с помощью свойства <code>fillStyle</code>.&nbsp;</p>

<p><strong>Синтаксис:</strong></p>

```javascript
fillRect(x, y, width, height)
```

<p><strong>Параметры:</strong></p>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><code>x</code></td>
			<td>Координата начальной точки прямоугольника по оси x.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>y</code></td>
			<td>&nbsp;Координата начальной точки прямоугольника по оси y.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>width</code></td>
			<td>Ширина прямоугольника.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>height</code>&nbsp;</td>
			<td>Высота прямоугольника.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Задаем цвет заливки
ctx.fillStyle = 'red';

// Рисуем прямоугольник с координатами (x, y) и размерами (width, height)
ctx.fillRect(50, 50, 100, 100);
```

<p>В этом примере мы рисуем красный прямоугольник с верхним левым углом в точке (50, 50) и размерами 100 пикселей в ширину и 100 пикселей в высоту.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/WNmgNPZ?default-tab=result" width="100%"></iframe></p>

### Использование метода <code>strokeRect()</code>

<p>Метод <code>strokeRect()</code> используется для рисования на холсте с начальной точкой в заданных координатах (x, y), а также с заданной шириной (w) и высотой (h), используя текущий стиль линий.</p>

<p><strong>Синтаксис:</strong></p>

```javascript
strokeRect(x, y, width, height)
```

<p><strong>Параметры:</strong></p>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><code>x</code>&nbsp;</td>
			<td>Координата начальной точки прямоугольника по оси x.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>y</code></td>
			<td>Координата начальной точки прямоугольника по оси y.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>width</code></td>
			<td>Ширина прямоугольника.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>height</code></td>
			<td>Высота прямоугольника.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Задаем цвет обводки и толщину линии
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;

// Рисуем обведенный прямоугольник с координатами (x, y) и размерами (width, height)
ctx.strokeRect(200, 50, 100, 100);
```

<p>В этом примере мы рисуем синий прямоугольник с верхним левым углом в точке (200, 50) и размерами 100 пикселей в ширину и 100 пикселей в высоту.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/wvOEvbe?default-tab=result" width="100%"></iframe></p>

### Настройка цвета и стиля

<p>Вы можете настраивать цвет и стиль заливки и обводки прямоугольника, используя свойства <code>fillStyle</code>, <code>strokeStyle</code> и <code>lineWidth</code> контекста рисования.</p>

<p><strong>Пример:</strong></p>

```javascript
// Задаем цвет заливки и обводки
ctx.fillStyle = 'green';
ctx.strokeStyle = 'purple';

// Задаем толщину линии
ctx.lineWidth = 4;

// Рисуем прямоугольник с заливкой и обводкой
ctx.fillRect(50, 150, 100, 50);
ctx.strokeRect(200, 150, 100, 50);
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/rNRZaVP?default-tab=result" width="100%"></iframe></p>

<p>В <strong>Canvas</strong> цвет можно задавать в различных форматах.</p>

<p>Ниже перечислены некоторые из наиболее распространенных форматов:</p>

<p><strong>Именованные цвета</strong></p>

<p>Вы можете использовать предопределенные имена цветов, такие как &quot;red&quot; (красный), &quot;blue&quot; (синий), &quot;green&quot; (зеленый) и т. д.</p>

```javascript
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
```

<p><strong>HEX-коды</strong>&nbsp;</p>

<p>Цвет можно задать в формате HEX-кода, который представляет собой шестнадцатеричное значение RGB (красный, зеленый, синий).</p>

```javascript
ctx.fillStyle = '#ff0000'; // Красный
ctx.strokeStyle = '#0000ff'; // Синий
```

<p><strong>RGB-значения</strong></p>

<p>Вы можете указать цвет, используя значения красного (R), зеленого (G) и синего (B) компонентов в диапазоне от 0 до 255.</p>

```javascript
ctx.fillStyle = 'rgb(255, 0, 0)'; // Красный
ctx.strokeStyle = 'rgb(0, 0, 255)'; // Синий
```

<p><strong>RGBA-значения</strong></p>

<p>Также можно задать цвет с альфа-каналом (прозрачность), добавив четвертый параметр, который представляет собой значение альфа в диапазоне от 0 до 1.</p>

```javascript
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Полупрозрачный красный
ctx.strokeStyle = 'rgba(0, 0, 255, 0.7)'; // Полупрозрачный синий
```

<p>Выбор формата для задания цвета зависит от ваших предпочтений и требований проекта.</p>

<p>Вот некоторые соображения, которые могут помочь вам принять решение:</p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td><strong>Простота использования</strong></td>
			<td><strong>Гибкость и точность</strong></td>
		</tr>
		<tr>
			<td>Именованные цвета (например, &quot;red&quot;, &quot;blue&quot;) - самые простые в использовании, поскольку они легко запоминаются и читаются. Однако они ограничены предопределенным списком цветов.</td>
			<td>Форматы HEX-кодов, RGB и RGBA обеспечивают большую гибкость и точность при выборе цвета. Вы можете точно настроить каждый канал (красный, зеленый, синий) и альфа-канал (прозрачность), чтобы получить нужный цвет.</td>
		</tr>
	</tbody>
</table>

### Использование метода&nbsp;<code>clearRect()</code>

<p>Метод <code>clearRect()</code> используется для очистки прямоугольной области на холсте, удаляя любые нарисованные ранее объекты или цвет заливки.</p>

<p><strong>Синтаксис:</strong></p>

```javascript
clearRect(x, y, width, height)
```

<p><strong>Параметры:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><code>x</code>&nbsp;</td>
			<td>Координата начальной точки прямоугольника по оси x.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>y</code></td>
			<td>Координата начальной точки прямоугольника по оси y.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>width</code></td>
			<td>Ширина прямоугольника.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>height</code></td>
			<td>Высота прямоугольника.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Рисуем что-то на холсте
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Очищаем прямоугольную область
ctx.clearRect(60, 60, 80, 80);
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/VwRGYPj?default-tab=result" width="100%"></iframe></p>


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