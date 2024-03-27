---
title: Создание простого онлайн сервиса на JavaScript для воспроизведения YouTube видео по кругу
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-27
description: Создание простого онлайн сервиса на JavaScript для воспроизведения YouTube видео по кругу
keywords: javascript, youtube
---

В этой статье мы рассмотрим, как создать простой онлайн сервис "YouTube Loop Player", который будет воспроизводить видео с **YouTube** по кругу с возможностью вставки ссылки на видео.

### 1. Начало

Для создания этого простого проекта вам понадобятся:

1. **HTML** для разметки веб-страницы.
2. **CSS** для стилизации внешнего вида.
3. **JavaScript** для управления воспроизведением видео и работы с **API YouTube**.


### 2. Создание HTML-разметки с Формой для Вставки Ссылки

Начнем с создания простой **HTML-разметки** для нашего проекта. 

Мы добавим форму, в которую пользователь сможет вставить ссылку на **YouTube** видео. 

Вот пример кода:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Loop Player</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="video-container">
        <iframe id="youtube-video" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
    </div>
    <form id="video-form">
        <label for="video-url">Введите ссылку на YouTube видео:</label><br>
        <input type="text" id="video-url" name="video-url" placeholder="Please paste YouTube URL" required><br>
        <button type="submit" id="video-submit">Воспроизвести</button>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

### 3. Стилизация с CSS

Добавим стили для улучшения внешнего вида нашего сервиса. 

Пример кода для файла `styles.css`:

```css
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: #000;
}

.video-container {
    width: 640px;
    height: 480px;
    margin: 40px auto;
}

#youtube-video {
    width: 100%;
    height: 100%;
}

#video-form {
    margin: 40px auto;
    width: 640px;
}

#video-url {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px 4px;
    background: #000;
    color: #fff;
    border: 1px solid #fff;
}

#video-submit {
    padding: 8px 4px;
}
```

### 4. JavaScript для Управления Видео и Обработки Формы

Теперь давайте добавим **JavaScript-код** для управления воспроизведением видео и обработки вставленной ссылки.

Пример кода для файла `script.js`:

```javascript
// Обработка отправки формы
document.getElementById('video-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы по умолчанию
    
    const videoUrl = document.getElementById('video-url').value;
    const videoId = getVideoId(videoUrl);
    
    if (videoId) {
        // Обновить iframe с новым видео
        document.getElementById('youtube-video').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;
    } else {
        alert('Пожалуйста, введите корректную ссылку на YouTube видео.');
    }
});

// Функция для получения ID видео из URL
function getVideoId(url) {
    const regex = /[?&]v=([^&#]+)/;
    const match = url.match(regex);
    return match && match[1];
}
```

Этот **JavaScript**-код будет автоматически обновлять `<iframe>` с новым видео, когда пользователь отправляет форму с ссылкой на **YouTube** видео.

### 5. Завершение

После завершения этих шагов у вас будет рабочий пример онлайн сервиса на **JavaScript**, который воспроизводит **YouTube** видео по кругу с возможностью вставки ссылки на видео. Вы можете разместить вашу страницу на любом веб-хостинге, чтобы делиться ею со всеми желающими.

<br>

<center>
<img width="600" src="https://ik.imagekit.io/awilum/awilum-ru/Screenshot%202024-03-27%20at%2019.32.00.png?updatedAt=1711542837856" alt="Screenshot-2024-03-27-at-19-32-00" border="0">
</center>