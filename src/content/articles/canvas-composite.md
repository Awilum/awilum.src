---
title: Композиция в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-03-01
description: Композиция в Canvas
keywords: javascript, canvas
---

<p>Композиция включает в себя различные способы наложения одного изображения или элемента рисунка на другой. Существует несколько режимов композиции, которые определяют, как цвета двух объектов смешиваются при их наложении.</p>

### Использование свойства <code>globalCompositeOperation</code>

<p>Свойство <code>globalCompositeOperation</code> контекста рисования позволяет устанавливать режим композиции. Его значения определяют, как цвета рисуемого объекта будут смешиваться с цветами объектов, находящихся под ним.</p>

```javascript
globalCompositeOperation = 'value';
```

<p>Где <code>value</code> - одно из допустимых значений для режима композиции.</p>

<p><strong>Примеры значений:</strong></p>

<table border="1" cellpadding="1" cellspacing="1" style="width: 100%;">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>source-over</code></td>
			<td>Значение по умолчанию.<br>
			Исходное изображение накрывает целевое</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>source-atop</code></td>
			<td>Исходное изображение накладывается поверх целевого.<br>
			При этом часть исходного изображения, которая выходит<br>
			за границы целевого изображения, не отображается</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>source-in</code></td>
			<td>Исходное изображение отображается внутри целевого изображения.<br>
			При этом отображается только та часть исходного изображения,<br>
			которая находится в границах целевого изображения.<br>
			Само целевое изображение становится прозрачным</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>source-out</code></td>
			<td>Исходное изображение отображается вне границ целевого изображения.<br>
			При этом отображается только та часть исходного изображения,<br>
			которая находится за пределами целевого изображения.<br>
			Само целевое изображение становится прозрачным</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>destination-over</code></td>
			<td>Целевое изображение накрывает исходное</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>destination-atop</code></td>
			<td>
			<p>Целевое изображение накладывается поверх исходного.<br>
			При этом часть целевого изображения, которая выходит за границы<br>
			исходного изображения, не отображается</p>
			</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>destination-in</code></td>
			<td>Целевое изображение отображается внутри исходного изображения.<br>
			При этом отображается только та часть целевого изображения,<br>
			которая находится в границах исходного изображения.<br>
			Само исходное изображение становится прозрачным</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>destination-out</code></td>
			<td>Целевое изображение отображается вне границ исходного изображения.<br>
			При этом отображается только та часть целевого изображения,<br>
			которая находится за пределами исходного изображения.<br>
			Само исходное изображение становится прозрачным</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>lighter</code></td>
			<td>Отображает исходное изображение + целевое изображение</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>copy</code></td>
			<td>Отображает исходное изображение.<br>
			Целевое изображение игнорируется</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>xor</code></td>
			<td>Исходное изображение комбинируется с целевым используя операцию исключающего ИЛИ</td>
		</tr>
	</tbody>
</table>

### Наложение прямоугольников с режимом <code>source-over</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'source-over';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/oNVadpg?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>source-atop</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'source-atop';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/PoLyegJ?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>source-in</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'source-in';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/MWxPGMx?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>source-out</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'source-out';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/ZEPqogZ?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>destination-over</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'destination-over';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/LYagrYN?default-tab=result" width="100%"></iframe></p>


### Наложение прямоугольников с режимом <code>destination-atop</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'destination-atop';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/RwdeJNg?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>destination-in</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'destination-in';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/RwdeJPg?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>destination-out</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'destination-out';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/jOJeKPQ?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>lighter</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'lighter';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/JjzmZKX?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>copy</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'copy';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/NWJOzrL?default-tab=result" width="100%"></iframe></p>

### Наложение прямоугольников с режимом <code>xor</code>

```javascript
// Рисуем первый прямоугольник (синий)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Применяем режим композиции
ctx.globalCompositeOperation = 'xor';

// Рисуем второй прямоугольник (красный) поверх первого
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
```

<p><strong>Результат: </strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/XWGxYjJ?default-tab=result" width="100%"></iframe></p>

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