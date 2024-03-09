---
title: Преобразования в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-29
description: Преобразования в Canvas
keywords: javascript, canvas
---

<p><strong>Преобразования </strong>в <strong>Canvas</strong> позволяют изменять положение, размер, вращение и искажение элементов, рисуемых на холсте. С помощью преобразований можно создавать сложные и динамичные визуальные эффекты.</p>

<p>Преобразования включают в себя <strong>сдвиг (translate)</strong>, <strong>вращение (rotate)</strong>, <strong>масштабирование (scale)</strong> и <strong>искажение (transform)</strong>.</p>

### Сдвиг (Translate)

<p><strong>Сдвиг (Translate)</strong> позволяет перемещать начало координат и элементы на холсте в определенном направлении. Это полезное преобразование, которое позволяет создавать анимации, располагать объекты в нужных местах и создавать сложные композиции из простых фигур.</p>

#### Использование метода <code>translate()</code>

<p>Метод <code>translate()</code>  сдвигает начало координат холста на заданные значения по горизонтали и вертикали. После сдвига все последующие операции рисования будут выполняться относительно нового начала координат.</p>

<p><strong>Cинтаксис:</strong></p>

```javascript
translate(x, y);
```

<p><strong>Параметры:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>x</code></td>
			<td>Сдвиг по горизонтали.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>y</code></td>
			<td>Сдвиг по вертикали.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Нарисуем квадрат до сдвига
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Сдвиг начала координат на (100, 50)
ctx.translate(100, 50);

// Нарисуем квадрат после сдвига
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 100, 100);
```

<p>В этом примере после вызова <code>translate(100, 50)</code> все последующие операции рисования будут сдвигаться на 100 пикселей вправо и 50 пикселей вниз относительно исходного начала координат.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/oNVaoKO?default-tab=result" width="100%"></iframe></p>

#### Совмещение сдвигов

<p>Вы можете вызывать <code>translate()</code> несколько раз для применения нескольких сдвигов последовательно.</p>

```javascript
ctx.translate(50, 50); // Сдвиг на (50, 50)
ctx.translate(100, 0); // Сдвиг на (100, 0)
```

#### Обратный сдвиг

<p>Чтобы вернуть начало координат к исходному состоянию, примените обратный сдвиг с отрицательными значениями.</p>

```javascript
ctx.translate(-100, -50); // Обратный сдвиг на (-100, -50)
```

### <strong>Вращение (Rotate)</strong>

<p><strong>Вращение (Rotate)</strong> поворачивать элементы относительно их начальной позиции. </p>

#### Использование метода <code>rotate()</code>

<p>Метод <code>rotate()</code> контекста рисования вращает координатную систему холста на заданный угол в радианах.</p>

<p><strong>Cинтаксис:</strong></p>

```javascript
rotate(angle);
```

<p><strong>Параметры:</strong></p>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>angle</code></td>
			<td>Угол вращения в радианах.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Сдвиг начала координат на (100, 0)
ctx.translate(100, 0);

// Нарисуем квадрат до вращения
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Вращение координатной системы на 45 градусов
ctx.rotate(Math.PI / 4);

// Нарисуем квадрат после вращения
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
```

<p>В этом примере второй квадрат будет нарисован после поворота координатной системы на 45 градусов. Все последующие операции рисования будут выполняться относительно повернутой системы координат.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/eYXPyvL?default-tab=result" width="100%"></iframe></p>

### Масштабирование (Scale)

<p><strong>Масштабирование (Scale)</strong> позволяет изменять размер элементов, нарисованных на холсте. Это преобразование позволяет увеличивать или уменьшать объекты, создавать эффекты перспективы и применять масштабирование в анимациях.</p>

#### Использование метода <code>scale()</code>

<p>Метод <code>scale()</code> контекста рисования масштабирует объекты на холсте по горизонтали и вертикали.</p>

<p><strong>Cинтаксис:</strong></p>

```javascript
scale(scaleX, scaleY);
```

<p><strong>Параметры:</strong></p>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>scaleX</code></td>
			<td>Коэффициент масштабирования по горизонтали.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>scaleY</code></td>
			<td>Коэффициент масштабирования по вертикали.</td>
		</tr>
	</tbody>
</table>

<p><strong>Пример:</strong></p>

```javascript
// Нарисуем круг до масштабирования
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Масштабирование объекта
ctx.scale(1.5, 1.5);

// Нарисуем круг после масштабирования
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();
```

<p>В этом примере второй круг будет нарисован после масштабирования по горизонтали в 1.5 раза. Масштабирование применяется ко всем последующим операциям рисования, и все они будут масштабироваться с использованием указанных коэффициентов.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/NWJOXva?default-tab=result" width="100%"></iframe></p>

### Искажение (Transform)

<p>Метод <code>transform()</code> позволяет производить произвольные преобразования объектов, такие как сдвиг, масштабирование, вращение и искажение. Этот метод применяет матрицу трансформации к текущему состоянию контекста рисования, что позволяет создавать сложные визуальные эффекты.</p>

#### Использование метода <code>transform()</code>

<p>Метод <code>transform()</code> позволяет производить произвольные преобразования путем применения матрицы трансформации.</p>

<p><strong>Cинтаксис:</strong></p>

```javascript
transform(a, b, c, d, e, f)
```

<p><strong>Параметры:</strong></p>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>a</code>, <code>b</code>, <code>c</code>, <code>d</code>, <code>e</code>, <code>f</code></td>
			<td> Элементы матрицы трансформации.</td>
		</tr>
	</tbody>
</table>

<p><strong>Матрица трансформации имеет следующий вид:</strong></p>

```
| a  c  e |
| b  d  f |
| 0  0  1 |
```

<p><strong>Пример:</strong></p>

```
// Нарисуем круг до масштабирования
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Масштабирование объекта
ctx.scale(1.5, 1.5);

// Нарисуем круг после масштабирования
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();
```

<p>В этом примере <code>transform(1, 0.5, 0.5, 1, 0, 0)</code> применяет искажение, увеличивая квадрат по горизонтали вдвое и сжимая по вертикали вдвое. Коэффициенты <code>a</code>, <code>b</code>, <code>c</code> и <code>d</code> определяют масштабирование и искажение, а <code>e</code> и <code>f</code> определяют сдвиг.</p>

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/wvOYpXr?default-tab=result" width="100%"></iframe></p>

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