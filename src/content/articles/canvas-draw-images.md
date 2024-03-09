---
title: Рисование изображений в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-28
description: Рисование изображений в Canvas
keywords: javascript, canvas
---

<p>Рисование изображений на холсте - это процесс отображения растровых изображений, таких как фотографии или другие изображения, Этот процесс обычно включает загрузку изображения и его отображение на холсте с использованием контекста рисования.</p>

<p>Прежде чем отобразить изображение на холсте, необходимо загрузить его с помощью объекта <code>Image</code> <strong>JavaScript.</strong></p>

```javascript
const img = new Image();

// Указываем путь к изображению
img.src = 'https://ik.imagekit.io/awilum/welcome-to-hawkins.jpg?updatedAt=1702540829891';
```

<p>После загрузки изображения источник изображения установлен, и мы можем использовать его для отображения на холсте с помощью метода <code>drawImage()</code> контекста рисования.</p>

```javascript
// Отображаем изображение на холсте в координатах (x, y)
ctx.drawImage(img, x, y);
```

<p>Метод <code>drawImage()</code> имеет несколько вариантов использования, позволяющих управлять размерами и масштабированием изображения.</p>

<p><strong>Синтакcис</strong>:</p>

```javascript
drawImage(img, dx, dy);
drawImage(img, dx, dy, dWidth, dHeight);
drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

<p><strong>Параметры:</strong></p>

<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center;"><code>img</code></td>
			<td>Элемент для отображения в контексте.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>dx</code></td>
			<td>Координата по оси Х, обозначающая стартовую точку холста-приёмника,<br>
			в которую будет помещён верхний левый угол исходного <code>image</code>.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>dy</code></td>
			<td>Координата по оси Y, обозначающая стартовую точку холста-приёмника,<br>
			в которую будет помещён верхний левый угол исходного <code>image</code>.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>dWidth</code></td>
			<td>Ширина изображения, полученного из исходного <code>image</code>.<br>
			Эта опция позволяет масштабировать изображение по ширине.<br>
			Если опция не задана, изображение не будет масштабировано.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>dHeight</code></td>
			<td>Высота изображения, полученного из исходного <code>image</code>.<br>
			Эта опция позволяет масштабировать изображение по высоте.<br>
			Если опция не задана, изображение не будет масштабировано.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>sx</code></td>
			<td>Координата по оси X верхнего левого угла фрагмента,<br>
			который будет вырезан из изображения-источника и помещён в контекст-приёмник.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>sy</code></td>
			<td>Координата по оси Y верхнего левого угла фрагмента,<br>
			который будет вырезан из изображения-источника и помещён в контекст-приёмник.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>sWidth</code></td>
			<td>
			<p>Ширина фрагмента, который будет вырезан из изображения источника<br>
			и помещён в контекст-приёмник. Если не задана, фрагмент от точки,<br>
			заданной <code>sx</code> и <code>sy</code> до правого нижнего угла источника будет целиком<br>
			скопирован в контекст-приёмник.</p>
			</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>sHeight</code></td>
			<td>Высота фрагмента, который будет вырезан из изображения источника и помещён в контекст-приёмник.</td>
		</tr>
	</tbody>
</table>

<p><strong>Отображение изображения в его естественном размере:</strong></p>

```javascript
ctx.drawImage(img, 0, 0);
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/MWxPOJJ?default-tab=result" width="100%"></iframe></p>

<p><strong>Масштабирование изображения до определенной ширины и высоты:</strong></p>

```javascript
// Изображение будет масштабировано до размеров 100x100 пикселей
ctx.drawImage(img, 0, 0, 100, 100);
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/zYbmPWR?default-tab=result" width="100%"></iframe></p>


<p><strong>Масштабирование изображения до размеров холста:</strong></p>

```javascript
ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
```

<p><strong>Результат:</strong></p>

<p><iframe allowfullscreen="true" height="500" scrolling="no" src="https://codepen.io/Awilum/embed/RwdejJz?default-tab=result" width="100%"></iframe></p>

### Использование метода <code>onLoad()</code>

<p>Метод <code>onload</code> объекта <code>Image</code> является обработчиком события, который вызывается, когда изображение загружено. Это очень важный момент при работе с изображениями в веб-разработке, потому что до момента загрузки изображения вы не можете гарантировать, что оно доступно для отображения или манипуляций.</p>

<p>Создаем новый объект <code>Image</code> и устанавливаем его <code>src</code> на путь к изображению. На этом этапе происходит начало загрузки изображения.</p>

```javascript
const img = new Image();
img.src = 'https://ik.imagekit.io/awilum/welcome-to-hawkins.jpg?updatedAt=1702540829891';
```

<p>После того как изображение полностью загружено, событие <code>onload</code> срабатывает, и код внутри обработчика выполняется.</p>

```javascript
img.onload = function() {
    // В этом блоке кода можно выполнять действия с изображением,
    // которые должны произойти после его загрузки.

   ctx.drawImage(img, 0, 0);
   console.log('Изображение загружено!');
};
```

### Зачем это нужно?

<ul>
	<li>
	<p><strong>Гарантия доступности изображения.</strong><br>
	Используя <code>onload</code>, вы убеждаетесь, что изображение загружено и доступно для использования, прежде чем пытаться отобразить его или выполнить другие операции с ним.</p>
	</li>
	<li>
	<p><strong>Избегание ошибок.</strong><br>
	Без обработчика <code>onload</code> существует риск попытаться отобразить изображение, которое еще не загружено, что может привести к ошибкам.</p>
	</li>
	<li>
	<p><strong>Выполнение действий после загрузки.</strong><br>
	Обработчик <code>onload</code> позволяет вам выполнить определенные действия только после того, как изображение загружено, например, установить его как фон холста или выполнить манипуляции с изображением.</p>
	</li>
</ul>

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