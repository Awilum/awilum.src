---
title: Начинаем работать с Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-21
description: Начинаем работать с Canvas
keywords: javascript, canvas
---

<p><strong>Canvas</strong>&nbsp;&mdash; это элемент <strong>HTML5</strong>, который позволяет создавать и рисовать графику на веб-странице с использованием <strong>JavaScript</strong>.</p>

<p>Давайте рассмотрим основные шаги по работе с <strong>Canvas</strong>.</p>

### Шаг 1: Создание Canvas элемента

<p>Первым шагом является создание элемента <strong>Canvas</strong> на веб-странице. Это можно сделать с помощью тега <code>&lt;canvas&gt;</code> в HTML.</p>

<pre>
<code class="language-html">&lt;canvas id="myCanvas" width="500" height="300"&gt;&lt;/canvas&gt;</code></pre>

<p>Этот тег создаст <strong>Canvas</strong> с уникальным идентификатором <code>myCanvas</code> и размерами <code>500</code> пикселей в ширину и <code>300</code> пикселей в высоту.&nbsp;</p>

<p>&nbsp;</p>

### Шаг 2: Получение контекста рисования

<p>Для работы с <strong>Canvas</strong> нам нужно получить контекст рисования.</p>

<p>В <strong>JavaScript</strong> мы можем сделать это с помощью метода <code>getContext()</code>.</p>

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
```

<p>Мы получаем элемент <strong>Canvas</strong> по его идентификатору, а затем получаем контекст рисования <strong>2D</strong>, который используется для рисования на <strong>Canvas</strong>.&nbsp;</p>

<blockquote>
<p>В <strong>JavaScript</strong>, объект <code>document</code> представляет текущий <strong>HTML-документ </strong>в браузере. Этот объект предоставляет интерфейс для взаимодействия с содержимым и структурой веб-страницы. Он является частью <strong>DOM</strong> <strong>(Document Object Model) API</strong>, который представляет документ в виде иерархического дерева узлов, таких как элементы, атрибуты и текстовые узлы.</p>
</blockquote>

<p>Метод <code>getContext()</code> используется для получения контекста рисования для элемента <code>&lt;canvas&gt;</code> в <strong>HTML</strong>. Этот метод может принимать различные аргументы в зависимости от типа контекста, который вы хотите получить.</p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td><strong>&nbsp;</strong><code>2d</code></td>
			<td>Этот контекст используется для рисования <strong>2D графики</strong>.</td>
		</tr>
		<tr>
			<td><code>webgl</code>&nbsp;или <code>experimental-webgl</code></td>
			<td>Этот контекст используется для создания <strong>3D графики</strong> с помощью <strong>WebGL</strong>.</td>
		</tr>
		<tr>
			<td><code>bitmaprenderer</code></td>
			<td>Этот контекст используется для рендеринга векторной графики.&nbsp;</td>
		</tr>
	</tbody>
</table>

<p>В курсе будет рассмотрен <code>2d</code>&nbsp;контекст используемый&nbsp;для рисования <strong>2D графики</strong> на элементе <code>&lt;canvas&gt;</code>.</p>

<p>&nbsp;</p>

### Шаг 3: Рисование простых фигур

<p>Теперь, когда у нас есть контекст рисования, мы можем рисовать на <strong>Canvas</strong>.</p>

<p>Ниже приведены примеры рисования нескольких простых фигур.</p>

<p><strong>Рисование прямоугольника:</strong></p>

```javascript
// Устанавливаем цвет заливки
ctx.fillStyle = 'red';

// Рисуем прямоугольник
ctx.fillRect(50, 50, 100, 100);
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/abMjKzp?default-tab=result" width="100%"></iframe></p>

<p><strong>Рисование окружности:</strong></p>

```javascript
// Начинаем новый путь
ctx.beginPath();

// Рисуем окружность
ctx.arc(200, 150, 50, 0, Math.PI * 2);

// Устанавливаем цвет заливки
ctx.fillStyle = 'blue';

// Заливаем окружность
ctx.fill();
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/dyrjKPZ?default-tab=result" width="100%"></iframe></p>

<p>&nbsp;</p>

<p>Это базовые шаги по использованию <strong>Canvas</strong> в <strong>JavaScript</strong>.</p>

<p>Вы можете использовать эти примеры для создания простых графических элементов на вашей веб-странице.</p>

<p><strong>Canvas</strong> предоставляет широкий набор методов для рисования, и вы можете экспериментировать с ними, чтобы создать различные визуальные эффекты и другую графику.</p>


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