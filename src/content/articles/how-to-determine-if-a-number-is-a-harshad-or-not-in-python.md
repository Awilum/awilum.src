---
title: Как определить, является ли число харшадом или нет в Python?
layout: ../../layouts/ArticleEntry.astro
categories: [python]
pubDate: 2024-03-28
description: Как определить, является ли число харшадом или нет в Python?
keywords: python
---

Харшадское число, также известное как число Нивена, является числом, которое делится на сумму своих цифр. Другими словами, если число делится на сумму его цифр без остатка, то оно считается харшадским числом. В этой статье мы рассмотрим, как можно определить, является ли число харшадом или нет с помощью **Python**.

Числа харшад, или числа Нивена, — натуральные числа, делящиеся нацело на сумму своих цифр.
Таким числом является, например, **1729**, так как `1729 = (1 + 7 + 2 + 9) × 91`.

<br>

<table width="100%">
  <thead>
    <tr>
      <th colspan="10">Первые 50 чисел харшад, не меньших 10</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td>10</td>
          <td>12</td>
          <td>18</td>
          <td>20</td>
          <td>21</td>
          <td>24</td>
          <td>27</td>
          <td>30</td>
          <td>36</td>
          <td>40</td>
      </tr>
      <tr>
          <td>42</td>
          <td>45</td>
          <td>48</td>
          <td>50</td>
          <td>54</td>
          <td>60</td>
          <td>63</td>
          <td>70</td>
          <td>72</td>
          <td>80</td>
      </tr>
      <tr>
          <td>81</td>
          <td>84</td>
          <td>90</td>
          <td>100</td>
          <td>102</td>
          <td>108</td>
          <td>110</td>
          <td>111</td>
          <td>112</td>
          <td>114</td>
      </tr>
      <tr>
          <td>117</td>
          <td>120</td>
          <td>126</td>
          <td>132</td>
          <td>133</td>
          <td>135</td>
          <td>140</td>
          <td>144</td>
          <td>150</td>
          <td>152</td>
      </tr>
      <tr>
          <td>153</td>
          <td>156</td>
          <td>162</td>
          <td>171</td>
          <td>180</td>
          <td>190</td>
          <td>192</td>
          <td>195</td>
          <td>198</td>
          <td>200</td>
      </tr>
  </tbody>
</table>

### Определение функции для проверки Харшадского числа

Для начала определим функцию, которая будет проверять, является ли данное число харшадом или нет. Мы можем использовать следующий алгоритм:

1. Преобразовать число в строку для удобства работы с его цифрами.
2. Пройти по каждой цифре числа, вычисляя их сумму.
3. Проверить, делится ли исходное число на сумму его цифр без остатка.
4. Вернуть булевое значение: `True`, если число является харшадом, и `False` в противном случае.

Давайте реализуем эту функцию:

```python
def is_harshad(number):
    # Преобразуем число в строку для работы с его цифрами
    num_str = str(number)
    
    # Вычисляем сумму цифр числа
    digit_sum = sum(int(digit) for digit in num_str)
    
    # Проверяем, делится ли число на сумму его цифр без остатка
    return number % digit_sum == 0
```

### Примеры использования функции

Теперь давайте протестируем нашу функцию на нескольких примерах:

```python
# Пример 1: Проверка харшадского числа
print(is_harshad(18))  # True
# 18 / (1 + 8) = 18 / 9 = 2

# Пример 2: Проверка нехаршадского числа
print(is_harshad(19))  # False
# 19 / (1 + 9) = 19 / 10 != integer

# Пример 3: Большое харшадское число
print(is_harshad(1729))  # True
# 1729 / (1 + 7 + 2 + 9) = 1729 / 19 = 91
```

