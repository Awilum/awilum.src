---
title: Координатная система в Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-22
description: Координатная система в Canvas
keywords: javascript, canvas
---

<p><strong>Координатная система</strong> &mdash; это математический инструмент, используемый для определения положения точек в пространстве или на плоскости. Она состоит из двух осей (или трех, в трехмерном пространстве), пересекающихся в точке, которая называется началом координат. Каждая из осей имеет определенное направление, и на них отложены числа, которые обозначают координаты точек.</p>

<p>Существует несколько различных типов координатных систем, но наиболее распространенные из них - это декартова координатная система и полярная координатная система.</p>

### Декартова координатная система

<center><img alt="" height="400" name="" src="https://ik.imagekit.io/awilum/awilum-ru/coordinates-cartesian.png?updatedAt=1709815703088" width="400" /></center>

<p>В декартовой координатной системе используются две перпендикулярные оси, обычно обозначаемые как x и y.</p>

<p>Начало координат располагается в точке пересечения этих осей.</p>

<p>Каждая точка в этой системе определяется уникальной парой чисел (x, y), где x - это расстояние по горизонтальной оси (ось x), а y - это расстояние по вертикальной оси (ось y).</p>

<p>Расстояние от начала координат до точки на плоскости может быть определено с использованием теоремы Пифагора или формулы расстояния между двумя точками.</p>

### Полярная координатная система

<center><img alt="" height="500" name="Polar_graph_paper.svg.png" src="https://ik.imagekit.io/awilum/awilum-ru/coordinates-polar.png?updatedAt=1709815703107" width="500" /></center>

<p>В полярной координатной системе точки задаются расстоянием (обычно обозначается как r) от начала координат и углом (обычно обозначается как &theta;), который эта точка образует с положительным направлением оси x.</p>

<p>Начало координат также располагается в центре системы.</p>

<p>Таким образом, каждая точка в полярной координатной системе определяется уникальной парой (r, &theta;).</p>

<p>В трехмерном пространстве добавляется третья ось (обычно обозначаемая как z) для создания трехмерной декартовой координатной системы. В этом случае каждая точка определяется тройкой координат (x, y, z).</p>

<p>В компьютерной графике также широко используются координатные системы, особенно для определения положения объектов на экране монитора или в трехмерном пространстве в виртуальном мире. Однако, в компьютерной графике используются свои концепции и терминология.</p>

### Двумерная координатная система

<center><img alt="" height="363" name="" src="https://ik.imagekit.io/awilum/awilum-ru/coordinates-2d.png?updatedAt=1709815703191" width="500" /></center>


<p>В двумерной компьютерной графике обычно используется декартова координатная система с началом координат в левом верхнем углу экрана.</p>

<p>Ось x направлена вправо, а ось y направлена вниз.</p>

<p>Пиксели на экране идентифицируются их координатами (x, y), где x - это расстояние от левого края экрана, а y - это расстояние от верхнего края экрана.</p>

<p>Обычно для измерения расстояний используются пиксели, а начало координат (0, 0) находится в левом верхнем углу экрана.</p>

### Трехмерная координатная система

<center><img alt="" height="487" name="" src="https://ik.imagekit.io/awilum/awilum-ru/coordinates-3d.png?updatedAt=1709815703184" width="487" /></center>

<p>В трехмерной компьютерной графике используется трехмерная декартова координатная система, включающая ось z, которая направлена вглубь экрана.</p>

<p>Каждая точка в трехмерном пространстве определяется тройкой координат (x, y, z).</p>

<p>В этой системе начало координат обычно находится в центре экрана, хотя в различных графических движках и приложениях это может быть изменено.</p>

### Координатная система в Canvas

<p>Координатная система в <strong>Canvas</strong> работает следующим образом: начало координат находится в верхнем левом углу, ось X направлена вправо, а ось Y - вниз.</p>

<center><img alt="" height="410" name="" src="https://ik.imagekit.io/awilum/awilum-ru/coordinates-canvas.jpg?updatedAt=1709815703350" width="500" /></center>

<p>Давайте рассмотрим более подробно, как работает координатная система на <strong>Canvas</strong>.</p>

<ol>
	<li>
	<p><strong>Начало координат.</strong><br />
	Верхний левый угол Canvas является началом координат.<br />
	Координата (0,0) находится в этой точке.</p>
	</li>
	<li>
	<p><strong>Ось X.</strong><br />
	Ось X направлена вправо от начала координат.<br />
	Положительные значения X увеличиваются вправо, а отрицательные - влево.</p>
	</li>
	<li>
	<p><strong>Ось Y.</strong><br />
	Ось Y направлена вниз от начала координат.<br />
	Положительные значения Y увеличиваются вниз, а отрицательные - вверх.</p>
	</li>
	<li>
	<p><strong>Единицы измерения.</strong><br />
	По умолчанию, единицы измерения на Canvas - это пиксели.<br />
	Каждый пиксель представляет одну единицу по осям X и Y.</p>
	</li>
</ol>

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