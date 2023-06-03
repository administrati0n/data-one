// Проверяем, является ли устройство мобильным
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Перенаправление на страницу в зависимости от типа устройства
if (isMobileDevice()) {
  // Редирект на страницу для телефона
  window.location.href = '../mindex.html';
} else {
  // Редирект на страницу для ПК
  window.location.href = '../index.html';
}
