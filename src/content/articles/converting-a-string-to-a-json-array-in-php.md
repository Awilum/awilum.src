---
title: Преобразование строки в массив JSON в PHP
layout: ../../layouts/ArticleEntry.astro
categories: [php]
pubDate: 2024-03-30
description: Преобразование строки в массив JSON в PHP
keywords: php
---

Одним из наиболее распространенных сценариев в веб-разработке является преобразование строки, содержащей данные в формате **JSON**, в массив **PHP**. Этот процесс необходим для обработки данных, полученных, например, от внешнего **API** или из других источников данных. После преобразования данные могут быть легко использованы и обработаны в рамках приложения, написанного на **PHP**.

### Что такое JSON?

**JSON (JavaScript Object Notation)** - это формат обмена данными, основанный на синтаксисе **JavaScript**. Он легко читаем для людей и легко обрабатываем для компьютеров. **JSON** состоит из пар "ключ: значение" и представляет собой или объект, или массив.

Пример **JSON**-объекта:

```json
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```

### Преобразование строки JSON в массив PHP

#### Функция `json_decode()`

В **PHP** есть встроенная функция `json_decode()`, которая преобразует строку **JSON** в соответствующую структуру данных **PHP**.

```php
$json_string = '{"name": "John", "age": 30, "city": "New York"}';

// Преобразование строки JSON в массив PHP
$array_data = json_decode($json_string, true);

// Вывод массива
print_r($array_data);
```

Результат:

```
Array
(
    [name] => John
    [age] => 30
    [city] => New York
)
```

Параметр `true` в `json_decode()` используется для указания, что объект должен быть преобразован в ассоциативный массив.

#### Обработка ошибок

```php
$json_string = '{"name": "John", "age": 30, "city": "New York"}';

// Преобразование строки JSON в массив PHP
$array_data = json_decode($json_string, true);

if (json_last_error() === JSON_ERROR_NONE) {
    print_r($array_data);
} else {
    echo 'Ошибка при разборе JSON: ' . json_last_error_msg();
}
```

Этот код обрабатывает возможные ошибки при разборе строки **JSON** и выводит сообщение об ошибке в случае неудачи.

Функция `json_last_error()` в **PHP** используется для получения кода последней ошибки, произошедшей при работе с **JSON**. Она предоставляет удобный способ проверки статуса разбора **JSON**-данных после использования функции `json_decode()` или `json_encode()`.

Вот некоторые распространенные коды ошибок **JSON**, которые могут быть возвращены функцией `json_last_error()`:


<table align="center" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align: center; width:500px;"><code>JSON_ERROR_NONE (0)</code></td>
			<td>Нет ошибки. Этот код возвращается, когда разбор JSON прошел успешно.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>JSON_ERROR_DEPTH (1)</code></td>
			<td>Превышена максимальная глубина стека.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>JSON_ERROR_DEPTH (1)</code></td>
			<td>Превышена максимальная глубина стека.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>JSON_ERROR_STATE_MISMATCH (2)</code></td>
			<td>Некорректный или некорректно заключенный JSON.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>JSON_ERROR_CTRL_CHAR (3)</code></td>
			<td>Найден неожиданный управляющий символ.</td>
		</tr>
		<tr>
			<td style="text-align: center;"><code>JSON_ERROR_SYNTAX (4)</code></td>
			<td>Синтаксическая ошибка, некорректный JSON.</td>
		</tr>
	</tbody>
</table>

#### Пример с массивом JSON

```php
$json_string = '[{"name": "John", "age": 30}, {"name": "Alice", "age": 25}]';

// Преобразование строки JSON в массив PHP
$array_data = json_decode($json_string, true);

// Вывод массива
print_r($array_data);
```

Результат:

```
Array
(
    [0] => Array
        (
            [name] => John
            [age] => 30
        )

    [1] => Array
        (
            [name] => Alice
            [age] => 25
        )

)
```