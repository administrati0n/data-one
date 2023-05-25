// Создаем элемент загрузочного экрана
var loadingScreen = document.createElement('div');
loadingScreen.style.width = '100%';
loadingScreen.style.height = '100vh';
loadingScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8';
loadingScreen.style.color = 'white';
loadingScreen.style.fontFamily = 'Arial, sans-serif';
loadingScreen.style.display = 'flex';
loadingScreen.style.alignItems = 'center';
loadingScreen.style.position = 'fixed';
loadingScreen.style.left = '0px';
loadingScreen.style.top = '0px';
loadingScreen.style.justifyContent = 'center';

// Создаем элемент индикатора загрузки
var loader = document.createElement('div');
loader.style.display = 'flex';
loader.style.width = '250px';
loader.style.height = '250px';
loader.style.background = 'linear-gradient(146deg, rgba(0,0,0,1) 0%, rgba(43,43,43,1) 100%)';
loader.style.borderRadius = '22px';
loader.style.borderTopColor = '#4287f5';
loader.style.animation = 'spin 1s linear infinite';
loader.style.justifyContent = 'center';

// Создаем элемент пульсации
var pulseElement = document.createElement('div');
pulseElement.style.margin = 'auto';
pulseElement.style.width = '100px';
pulseElement.style.height = '100px';
pulseElement.style.backgroundImage = 'url(https://github.com/administrati0n/admin-store/blob/main/img/as_l.png?raw=true)';
pulseElement.style.backgroundSize = '100px';
// pulseElement.style.borderRadius = '50%';

// Функция для анимации пульсации
function animatePulse() {
  pulseElement.style.transform = 'scale(1)';
  pulseElement.style.transition = 'transform 1s ease-in-out';

  setTimeout(function() {
    pulseElement.style.transform = 'scale(1.2)';
  }, 1000);

  setTimeout(animatePulse, 2000);
}

// Запускаем анимацию
animatePulse();

// Добавляем элемент пульсации в body
loader.appendChild(pulseElement);

// Добавляем индикатор загрузки в загрузочный экран
loadingScreen.appendChild(loader);

// Добавляем загрузочный экран в body
document.body.appendChild(loadingScreen);

// Функция для скрытия загрузочного экрана
function hideLoadingScreen() {
  loadingScreen.style.display = 'none';
}

// Скрываем загрузочный экран через 3 секунды
setTimeout(hideLoadingScreen, 0);
