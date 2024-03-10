---
title: Как исправить арифметику с десятичными числами в JavaScript?
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-02-14
description: Статья рассматривает как исправить арифметику с десятичными числами в JavaScript
keywords: javascript, math
---

При попытке сложить два десятичных числа в JavaScript вы можете столкнуться с неожиданным поведением. Например, результат 0.1 + 0.1 будет ожидаемым - 0.2.

<center>
<img width="600" src="https://ik.imagekit.io/awilum/awilum-ru/Screenshot%202024-02-14%20at%2010.18.55.png?updatedAt=1707880870066" />
</center>

Однако иногда вы получите неожиданный результат. Например, при выполнении операции 0.1 + 0.2.

Результат не будет равен 0.3, как ожидается, а будет 0.30000000000000004.

<center>
<img width="600" src="https://ik.imagekit.io/awilum/awilum-ru/Screenshot%202024-02-14%20at%2010.19.52.png?updatedAt=1707880870036" />
</center>

Аналогично, при вычислении выражения 1.4 - 1 результатом будет 0.3999999999999999.

<center>
<img width="600" src="https://ik.imagekit.io/awilum/awilum-ru/Screenshot%202024-02-14%20at%2010.20.05.png?updatedAt=1707880870036" />
</center>

Это явление не уникально для JavaScript, оно возникает в любом языке программирования.

Причина этого заключается в том, что компьютеры хранят данные в двоичной системе, а не в десятичной. Некоторые десятичные числа не могут быть точно представлены в двоичной форме, что приводит к потере точности при выполнении вычислений.

Для обхода этой проблемы вы можете использовать библиотеки, такие как [decimal.js](https://mikemcl.github.io/decimal.js/), [bignumber.js](https://mikemcl.github.io/bignumber.js/) или [big.js](https://mikemcl.github.io/big.js/).

Вы также можете использовать следующий трюк.

Вы обрезаете десятичные знаки после 2 позиций, и умножить число на 100, чтобы удалить десятичную часть.

Затем вы делите на 100 после выполнения суммирования:
```javascript
(0.1.toFixed(2) * 100 + 0.2.toFixed(2) * 100) / 100
```

<center>
<img width="600" src="https://ik.imagekit.io/awilum/awilum-ru/Screenshot%202024-02-14%20at%2010.29.12.png?updatedAt=1707881384539" />
</center>

Более практичный вариант:
```javascript
const sum = (a, b, positions) => {
  const factor = Math.pow(10, positions)
  return (a.toFixed(positions) * factor + b.toFixed(positions) * factor) / factor
}

sum(0.1, 0.2, 4);
```


<center>
<img width="600" src="https://ik.imagekit.io/awilum/awilum-ru/Screenshot%202024-02-14%20at%2010.32.27.png?updatedAt=1707881572692" />
</center>