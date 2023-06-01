  var msg =
    " Admin Store ";
  var chars = Array.from(msg);

  function scrollTitle() {
    chars.push(chars.shift());
    document.title = chars.join("");
    window.setTimeout(scrollTitle, 100);
  }

  (function() {
    scrollTitle();
  })();

// Создаем элементы страницы
var body = document.body;

// Устанавливаем текст и стили элементов

body.style.background = 'black';
body.style.color = 'white';
body.style.height = '99999px';
body.style.transition = '0.8s';
// body.style.width = '99999px';

// Добавляем элементы на страницу

