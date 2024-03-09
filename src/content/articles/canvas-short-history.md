---
title: Краткая история Canvas
layout: ../../layouts/ArticleEntry.astro
categories: [javascript,canvas]
pubDate: 2024-02-20
description: Краткая история Canvas
keywords: javascript, canvas
---

<p><strong>Canvas</strong> &mdash; это элемент <strong>HTML5</strong>, который представляет собой прямоугольную область на странице, которую можно настраивать и рисовать на ней с помощью <strong>JavaScript</strong>.&nbsp;</p>

<p>Первые признаки тогда еще проприетарного элемента <strong>Canvas</strong>&nbsp;были внесены в древо исходного кода <strong>WebKit</strong>&nbsp;&mdash;&nbsp;<strong>Ричардом Уильямсоном</strong> 25 мая 2004 года. Идея <strong>Apple</strong> заключалась в том, чтобы предоставить доступ к системе рисования <strong>Quartz</strong> операционной системы <strong>Mac OS X</strong> для <strong>JavaScript</strong> и <strong>HTML</strong>, чтобы упростить написание графических виджетов для <strong>Apple Dashboard</strong>. Следовательно, поскольку оба продукта используют один и тот же движок рендеринга, элемент стал доступен также в браузере <strong>Safari</strong>.</p>

<p>Несколько лет ранее, в конце октября 2001 года, Джо Хьюитт открыл issue <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=102285" rel="noopener noreferrer nofollow">#102285</a> в системе отслеживания ошибок <strong>Mozilla</strong>. Предлагая тот же самый элемент и мотивацию, его предложение заключалось в реализации пользовательского элемента управления рисованием для <strong>XML User Interface Language Mozilla</strong>. <strong>Брендан Айк</strong>, создатель языка <strong>JavaScript</strong>, отверг идею как нечто для фанатов рендеринга.</p>

<p>Первого апреля 2005 года <strong>Владимир Вукичевич </strong>из <strong>Mozilla</strong> загрузил патч с базовыми функциями <strong>Canvas</strong>, который открыл путь для дальнейшей работы в <strong>Firefox</strong>. Хотя эта первая реализация работала только в <strong>Linux</strong> из-за разных форматов цвета в <strong>Windows</strong> и <strong>Mac OS X</strong>, выход их проекта &quot;Deer Park&quot; в конце ноября, известного как Firefox 1.5, представил кросс-платформенную реализацию <strong>Canvas</strong>.</p>

<p>Opera ввел элемент <strong>Canvas</strong> в середине 2006 года с выпуском <strong>Opera 9</strong>. Это означало, что все основные браузеры, за исключением <strong>Internet Explorer</strong>, реализовали элемент на уровне ядра. Однако это не означало, что элемент <strong>Canvas</strong>&nbsp;был непригоден для использования, так как проекты Google ExCanvas и Mozilla IECanvas обеспечили ограниченную поддержку элемента в браузере Microsoft.</p>

<p>Путь к правильной стандартизации был далеко не гладким. Это началось с отсутствия должного предложения со стороны <strong>Apple</strong>, что привело к тому, что первая спецификация была основана на работах по обратной инженерии Иэна Хиксона, редактора спецификации <strong>HTML5</strong>. В 2005 году Джаянт Сай выдвинул первую идею относительно рисования текста на холсте, которая позже была оформлена в приличное предложение Стефаном Хаустайном.</p>

<p>Тем не менее, не все прошло гладко. После того как Mozilla Firefox и Opera реализовали элемент <strong>Canvas</strong>, Хелен Плотка Уоркман, старший юрист <strong>Apple</strong> по патентам, отправила сообщение в <strong>WHATWG</strong> и Иэну Хиксону, заявив, что Apple считает себя владельцем интеллектуальной собственности по элементу холста и рассмотрит возможность предоставления этих прав интеллектуальной собственности только в случае принятия чернового стандарта Веб-приложений в качестве формализованного стандарта с <strong>W3C</strong>.</p>

<p>В феврале 2008 года, был опубликован первый черновик спецификации <strong>HTML5</strong> как рабочий черновик <strong>W3C</strong>. 18 июня того же года <strong>Apple</strong> раскрыла патент <a href="https://www.freepatentsonline.com/y2006/0005114.html" rel="noopener noreferrer nofollow">11/144384</a> для использования спецификации <strong>HTML5</strong>. Тот же патент был раскрыт в еще шести юрисдикциях, что позволило <strong>WHATWG</strong> продолжать включать новый элемент <strong>Canvas</strong>.</p>

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

