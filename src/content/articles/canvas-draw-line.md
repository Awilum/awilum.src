---
title: Рисование линии в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-25
description: Рисование линии в Canvas
keywords: javascript, canvas
---

<p><strong>Рисование прямой линии</strong> &mdash;&nbsp;одно из самых простых и распространенных действий при использовании <strong>Canvas</strong> для создания графики с помощью <strong>JavaScript</strong>. Для рисования прямой линии используется метод <code>lineTo(x, y)</code></p>

<p>Метод <code>lineTo(x, y)</code> используется для добавления линии от текущей позиции (позиции &quot;курсора&quot;) до указанной точки (x, y) на холсте. При этом сама линия не рисуется, пока не будет вызван метод для рисования контура или заливки.</p>

<p><strong>Параметры:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><code>x</code></td>
			<td>Координата X позиции конца линии.</td>
		</tr>
		<tr>
			<td style="text-align:center"><code>y</code></td>
			<td>Координата Y&nbsp;позиции конца линии.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Начинаем новый путь
ctx.beginPath();

// Перемещаем "курсор" в точку (50, 50)
ctx.moveTo(50, 50);

// Добавляем линию от текущей позиции до точки (150, 150)
ctx.lineTo(150, 150);

// Закрываем путь
ctx.closePath();

// Рисуем контур пути
ctx.strokeStyle = 'blue'; // Цвет контура
ctx.lineWidth = 2; // Толщина линии
ctx.stroke();
```

<p>В этом примере мы начинаем новый путь с помощью <code>beginPath()</code>, затем перемещаем &quot;курсор&quot; в точку (50, 50) с помощью <code>moveTo(50, 50)</code>, добавляем линию до точки (150, 150) с помощью <code>lineTo(150, 150)</code>, а затем рисуем контур пути с помощью <code>stroke()</code>. Линия будет нарисована в указанных координатах с заданным цветом и толщиной линии.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/zYbJGVP?default-tab=result" width="100%"></iframe></p>


### Рисование линии на основе пользовательского ввода

<p>Допустим, у пользователя есть возможность рисовать линию, задавая точки с помощью мыши. В этом примере мы можем использовать события мыши для отслеживания пользовательского ввода и рисования линии.</p>

<p><strong>&nbsp;Пример:</strong></p>

```javascript
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) =&gt; {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () =&gt; isDrawing = false);
canvas.addEventListener('mouseout', () =&gt; isDrawing = false);
```

<p>Этот код позволяет пользователю рисовать линию, перетаскивая мышь по холсту.</p>

<p>Давайте разберем, как это работает:</p>

<ol>
	<li>
	<p>Переменные <code>isDrawing</code>, <code>lastX</code> и <code>lastY</code> используются для отслеживания состояния рисования (включено или выключено) и последней позиции мыши.</p>
	</li>
	<li>
	<p>Функция <code>draw(e)</code> вызывается каждый раз при перемещении мыши по холсту <code>mousemove</code>. Она проверяет, включено ли рисование <code>isDrawing</code>. Если рисование выключено, функция завершает свое выполнение. Если рисование включено, функция начинает новый путь <code>beginPath()</code>, перемещает &quot;курсор&quot; в предыдущие координаты <code>moveTo(lastX, lastY)</code>&nbsp;и рисует линию от предыдущих координат до текущих координат мыши <code>lineTo(e.offsetX, e.offsetY)</code>. После этого линия обводится c помощью&nbsp;<code>stroke()</code>. Последние координаты мыши обновляются на текущие координаты <code>lastX = e.offsetX</code>, <code>lastY = e.offsetY</code>.</p>
	</li>
	<li>
	<p>Событие <code>mousedown</code> срабатывает при нажатии кнопки мыши на холсте. При этом флаг <code>isDrawing</code> устанавливается в <code>true</code>, и переменные <code>lastX</code> и <code>lastY</code> устанавливаются в текущие координаты мыши <code>e.offsetX</code>, <code>e.offsetY</code>.</p>
	</li>
	<li>
	<p>Событие <code>mouseup</code> срабатывает, когда кнопка мыши отпускается. Это приводит к установке флага <code>isDrawing</code> в <code>false</code>, что прекращает рисование на холсте.</p>
	</li>
	<li>
	<p>Событие <code>mouseout</code> срабатывает, когда курсор мыши покидает область холста. Аналогично событию <code>mouseup</code>, это также приводит к установке флага <code>isDrawing</code> в <code>false</code>, чтобы предотвратить рисование при перемещении мыши вне холста.</p>
	</li>
</ol>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/poYOEJK?default-tab=result" width="100%"></iframe></p>

<p>Для очистки холста, нажмите на кнопку &quot;Rerun&quot; или перезагрузите страницу.</p>

### Рисование кардиоиды

<p><strong>Кардиоида</strong> &mdash; плоская линия, которая описывается фиксированной точкой окружности, катящейся по неподвижной окружности с таким же радиусом. Получила своё название из-за схожести своих очертаний со стилизованным изображением сердца.</p>

<p style="text-align:center"><img alt="" height="250" name="" src="https://upload.wikimedia.org/wikipedia/commons/8/83/EpicycloidK1.gif" width="250" /></p>

<p><strong>Пример:</strong></p>

```javascript
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;

for (let t = 0; t &lt;= Math.PI * 2; t += 0.01) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    ctx.lineTo(x + canvas.width / 2, -y + canvas.height / 2);
}

ctx.stroke();
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/ExMdbrp?default-tab=result" width="100%"></iframe></p>

### Рисование параболы

<p><strong>Парабола</strong> &mdash; плоская кривая, один из типов конических сечений.</p>

<p><strong>Пример:</strong></p>

```javascript
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;

for (let x = -canvas.width / 2; x &lt;= canvas.width / 2; x += 0.1) {
    const y = x * x / 100;
    ctx.lineTo(x + canvas.width / 2, -y + canvas.height / 2);
}

ctx.stroke();
```

<p><strong>Результат:</strong>&nbsp;</p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/GReYObJ?default-tab=result" width="100%"></iframe></p>


### Рисование синусоиды

<p><strong>Синусоида</strong> &mdash; плоская кривая, задаваемая в прямоугольных координатах уравнением График уравнения вида также зачастую называется синусоидой. Данный график получается из синусоидального сдвигом на в отрицательном направлении оси абсцисс.</p>

<p><strong>Пример:</strong></p>

```javascript
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;

for (let x = -canvas.width / 2; x &lt;= canvas.width / 2; x += 0.1) {
    const y = Math.sin(x / 50) * 50; 
    ctx.lineTo(x + canvas.width / 2, -y + canvas.height / 2);
}

ctx.stroke();
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/YzgJEom?default-tab=result" width="100%"></iframe></p>


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